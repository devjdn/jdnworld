<script lang="ts">
    import { onMount } from "svelte";
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { mode } from "mode-watcher";
    import type * as THREE_TYPE from "three";

    let canvas: HTMLCanvasElement;
    const opacity = new Tween(0, { duration: 2500, easing: cubicOut });
    let material = $state<THREE_TYPE.ShaderMaterial | undefined>(undefined);

    $effect(() => {
        if (material) {
            material.uniforms.uLightMode.value =
                mode.current === "light" ? 1.0 : 0.0;
        }
    });

    onMount(() => {
        let animationId: number;

        const init = async () => {
            const THREE = await import("three");
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            renderer.setClearColor(0x000000, 0);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            const geometry = new THREE.PlaneGeometry(2, 2);

            material = new THREE.ShaderMaterial({
                transparent: true,
                uniforms: {
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2() },
                    uLightMode: { value: mode.current === "light" ? 1.0 : 0.0 },
                },
                vertexShader: `
                    void main() {
                        gl_Position = vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime;
                    uniform vec2 uResolution;
                    uniform float uLightMode;

                    vec3 rainbow(float t) {
                        vec3 a = vec3(0.5, 0.5, 0.5);
                        vec3 b = vec3(0.5, 0.5, 0.5);
                        vec3 c = vec3(1.0, 1.0, 1.0);
                        vec3 d = vec3(0.00, 0.33, 0.67);
                        return a + b * cos(6.28318 * (c * t + d));
                    }

                    void main() {
                        vec2 uv = gl_FragCoord.xy / uResolution;
                        float fromBottom = uv.y;
                        float topFade = 1.0 - smoothstep(0.3, 1.0, fromBottom);
                        float fromCenter = abs(uv.x - 0.5) * 2.0;
                        float cornerFalloff = 1.0 - fromCenter * fromCenter;
                        float colorT = uv.x + uTime * 0.04;
                        vec3 color = rainbow(colorT);

                        color = mix(color, vec3(1.0), uLightMode * 0.6);

                        float glow = exp(-fromBottom * 2.0) * cornerFalloff * topFade;
                        float hotCore = exp(-fromBottom * 5.0) * cornerFalloff * 0.8 * topFade;
                        float combined = glow + hotCore;

                        float alpha = combined * mix(0.9, 0.5, uLightMode);

                        gl_FragColor = vec4(color, alpha);
                    }
                `,
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const resize = () => {
                const w = window.innerWidth;
                const h = 150;
                renderer.setSize(w, h, false);
                renderer.setPixelRatio(window.devicePixelRatio);
                material!.uniforms.uResolution.value.set(
                    w * window.devicePixelRatio,
                    h * window.devicePixelRatio,
                );
            };

            resize();
            window.addEventListener("resize", resize);
            opacity.set(1);

            const tick = (time: number) => {
                material!.uniforms.uTime.value = time * 0.001;
                renderer.render(scene, camera);
                animationId = requestAnimationFrame(tick);
            };

            animationId = requestAnimationFrame(tick);

            return () => {
                window.removeEventListener("resize", resize);
                cancelAnimationFrame(animationId);
                renderer.dispose();
            };
        };

        const cleanup = init();
        return () => {
            cleanup.then((fn) => fn?.());
        };
    });
</script>

<canvas
    bind:this={canvas}
    style="opacity: {opacity.current}"
    style:background="transparent"
    style:height="150px"
    class="w-full pointer-events-none block"
></canvas>
