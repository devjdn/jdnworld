<script lang="ts">
    import { onMount } from "svelte";
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import type * as THREE_TYPE from "three";

    let canvas: HTMLCanvasElement;
    const opacity = new Tween(0, { duration: 2500, easing: cubicOut });
    let material = $state<THREE_TYPE.ShaderMaterial | undefined>(undefined);

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
                    uCanvasHeight: { value: 150.0 },
                },
                vertexShader: `
                    void main() {
                        gl_Position = vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime;
                    uniform vec2 uResolution;
                    uniform float uCanvasHeight;

                    vec3 gradient(float t) {
                        vec3 a = vec3(0.3, 0.4, 0.6);
                        vec3 b = vec3(0.2, 0.2, 0.3);
                        vec3 c = vec3(1.0, 1.0, 1.0);
                        vec3 d = vec3(0.55, 0.6, 0.65);
                        return a + b * cos(6.28318 * (c * t + d));
                    }

                    float hash(vec2 p) {
                        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
                    }

                    float noise(vec2 p) {
                        vec2 i = floor(p);
                        vec2 f = fract(p);
                        vec2 u = f * f * (3.0 - 2.0 * f);
                        return mix(
                            mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
                            u.y
                        );
                    }

                    void main() {
                        vec2 uv = gl_FragCoord.xy / uResolution;
                        float fromCenter = abs(uv.x - 0.5) * 2.0;
                        float cornerFalloff = 1.0 - fromCenter * fromCenter;
                        float colorT = uv.x + uTime * 0.14;
                        vec3 color = gradient(colorT);

                        float n = noise(gl_FragCoord.xy * 0.4 + uTime * 0.5);
                        color += (n - 0.5) * 0.08;

                        float pixelsFromBottom = uv.y * uCanvasHeight;
                        float falloff = 3.5 / uCanvasHeight;
                        float exp_fade = exp(-pixelsFromBottom * falloff) * cornerFalloff;
                        float ceiling_fade = 1.0 - smoothstep(0.6, 1.0, uv.y);
                        float fade = exp_fade * ceiling_fade;
                        float alpha = fade * 0.9;
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
    class="w-full pointer-events-none block absolute bottom-0 left-0 h-24 md:h-36"
></canvas>
