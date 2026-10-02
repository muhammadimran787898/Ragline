import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } from 'three';

/** Creates an soft footer aura scene with a complete teardown lifecycle. */
export const createFooterAuraScene = (canvas: HTMLCanvasElement) => {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 2);
  camera.position.z = 1;
  const geometry = new PlaneGeometry(2, 2);
  const uniforms = { time: { value: 0 }, pointer: { value: new Vector2() } };
  const material = new ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: false,
    vertexShader: `varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: `varying vec2 vUv;
      uniform float time;
      uniform vec2 pointer;
      void main() {
        vec2 uv = vUv;
        float t = time * 0.24;
        vec2 flow = vec2(sin(uv.y * 3.0 + t), cos(uv.x * 3.0 - t * 0.8)) * 0.065;
        vec2 warped = uv + flow;
        vec3 color = vec3(0.42, 0.18, 0.11);
        float purple = exp(-dot((warped-vec2(0.0,-0.10))*vec2(2.5,1.7), (warped-vec2(0.0,-0.10))*vec2(2.5,1.7)));
        float pink = exp(-dot((warped-vec2(0.35,-0.05))*vec2(2.7,1.9), (warped-vec2(0.35,-0.05))*vec2(2.7,1.9)));
        float orange = exp(-dot((warped-vec2(0.67,-0.05))*vec2(2.3,1.6), (warped-vec2(0.67,-0.05))*vec2(2.3,1.6)));
        float cream = exp(-dot((warped-vec2(0.53,-0.16))*vec2(4.2,4.3), (warped-vec2(0.53,-0.16))*vec2(4.2,4.3)));
        color = mix(color, vec3(0.31,0.18,0.58), purple);
        color = mix(color, vec3(0.74,0.42,0.61), pink * 0.85);
        color = mix(color, vec3(0.95,0.43,0.20), orange * 0.9);
        color = mix(color, vec3(1.0,0.96,0.80), cream);
        float darkTop = 1.0 - smoothstep(0.05, 1.0, uv.y);
        gl_FragColor = vec4(color * darkTop, 1.0);
      }`,
  });
  scene.add(new Mesh(geometry, material));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true;
  const started = performance.now();
  const render = () => {
    uniforms.time.value = reducedMotion.matches ? 0 : (performance.now() - started) / 1000;
    renderer.render(scene, camera);
    canvas.dataset.ready = 'true';
  };
  const updateLoop = () => {
    renderer.setAnimationLoop(null);
    if (visible && !document.hidden && !reducedMotion.matches) renderer.setAnimationLoop(render);
    else if (visible && !document.hidden) render();
  };
  const resize = new ResizeObserver(() => {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    render();
  });
  resize.observe(canvas);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? false;
    updateLoop();
  });
  intersection.observe(canvas);
  const move = (event: PointerEvent) => {
    if (reducedMotion.matches) return;
    uniforms.pointer.value.set(event.clientX / window.innerWidth - 0.5, event.clientY / window.innerHeight - 0.5);
  };
  window.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('visibilitychange', updateLoop);
  reducedMotion.addEventListener('change', updateLoop);
  updateLoop();
  return () => {
    renderer.setAnimationLoop(null);
    resize.disconnect();
    intersection.disconnect();
    window.removeEventListener('pointermove', move);
    document.removeEventListener('visibilitychange', updateLoop);
    reducedMotion.removeEventListener('change', updateLoop);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    delete canvas.dataset.ready;
  };
};
