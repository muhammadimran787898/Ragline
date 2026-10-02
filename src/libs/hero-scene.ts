import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } from 'three';

/** Creates an ambient hero scene with a complete teardown lifecycle. */
export const createHeroScene = (canvas: HTMLCanvasElement) => {
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
        float edge = pow(abs(uv.x - 0.5) * 2.0, 2.8);
        float wave = sin(uv.x * 9.0 + time * 0.22 + pointer.x * 0.15) * 0.12;
        float ribbon = exp(-pow((uv.y - 0.43 - wave) * 4.5, 2.0));
        float lines = 0.7 + 0.3 * sin(uv.x * 340.0 + uv.y * 12.0 + time * 0.3);
        vec3 violet = vec3(0.30, 0.08, 0.68);
        vec3 amber = vec3(0.95, 0.25, 0.10);
        vec3 color = mix(violet, amber, smoothstep(0.3, 0.75, uv.x));
        float fade = smoothstep(0.0, 0.18, uv.y) * (1.0 - smoothstep(0.80, 1.0, uv.y));
        gl_FragColor = vec4(color, edge * ribbon * lines * fade * 0.55);
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
