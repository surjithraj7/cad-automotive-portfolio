import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Box, Grid3X3, RotateCcw, RefreshCw } from 'lucide-react';

interface ModelViewer3DProps {
  glbUrl: string;
  title: string;
  height?: string;
}

export const ModelViewer3D: React.FC<ModelViewer3DProps> = ({
  glbUrl,
  title,
  height = '100%',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);

  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const initialCamPos = useRef<THREE.Vector3>(new THREE.Vector3(2, 1.5, 2));
  const modelRootRef = useRef<THREE.Object3D | null>(null);
  const gridRef = useRef<THREE.GridHelper | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    setLoading(true);
    setError(null);

    const width = container.clientWidth || 640;
    const h = container.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e14);

    const camera = new THREE.PerspectiveCamera(42, width / h, 0.01, 500);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.15);
    rimLight.position.set(-6, 4, -5);
    scene.add(rimLight);

    const fillLight = new THREE.AmbientLight(0xdbeafe, 0.35);
    scene.add(fillLight);

    const grid = new THREE.GridHelper(6, 24, 0x3b82f6, 0x1e293b);
    grid.material.opacity = 0.45;
    grid.material.transparent = true;
    grid.visible = showGrid;
    scene.add(grid);
    gridRef.current = grid;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.4;
    controlsRef.current = controls;

    let cancelled = false;
    const loader = new GLTFLoader();
    loader.load(
      glbUrl,
      (gltf) => {
        if (cancelled) return;
        const root = gltf.scene;

        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z, 0.001);
        const scale = 2.4 / maxDim;

        root.scale.setScalar(scale);
        root.position.set(
          -center.x * scale,
          -box.min.y * scale,
          -center.z * scale
        );

        scene.add(root);
        modelRootRef.current = root;

        const normBox = new THREE.Box3().setFromObject(root);
        const normCenter = normBox.getCenter(new THREE.Vector3());
        controls.target.copy(normCenter);

        const camDist = 3.2;
        const pos = new THREE.Vector3(camDist * 0.85, normCenter.y + camDist * 0.55, camDist * 0.9);
        camera.position.copy(pos);
        initialCamPos.current.copy(pos);
        controls.update();
        setLoading(false);
      },
      undefined,
      () => {
        if (!cancelled) {
          setError('Unable to load 3D preview mesh.');
          setLoading(false);
        }
      }
    );

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const hh = container.clientHeight;
      if (w > 0 && hh > 0) {
        camera.aspect = w / hh;
        camera.updateProjectionMatrix();
        renderer.setSize(w, hh);
      }
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      controls.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [glbUrl]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.visible = showGrid;
    }
  }, [showGrid]);

  useEffect(() => {
    if (!modelRootRef.current) return;
    modelRootRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((m) => {
          if (m && 'wireframe' in m) {
            (m as THREE.MeshStandardMaterial).wireframe = wireframe;
          }
        });
      }
    });
  }, [wireframe]);

  const resetCamera = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.copy(initialCamPos.current);
    controlsRef.current.update();
  };

  return (
    <div
      style={{ position: 'relative', width: '100%', height, background: '#0a0e14' }}
      aria-label={`Interactive 3D view of ${title}`}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(10, 14, 20, 0.85)',
            color: '#93c5fd',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
          }}
        >
          Loading 3D CAD Geometry...
        </div>
      )}

      {error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            color: '#fca5a5',
            fontSize: '0.85rem',
          }}
        >
          {error}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '0.75rem',
          right: '0.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            background: 'rgba(11, 14, 19, 0.82)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            padding: '0.28rem 0.6rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: '#cbd5e1',
          }}
        >
          Drag: Orbit • Scroll: Zoom • Right-drag: Pan
        </span>

        <div style={{ display: 'flex', gap: '0.4rem', pointerEvents: 'auto' }}>
          <button
            type="button"
            onClick={() => setWireframe((v) => !v)}
            title="Toggle Wireframe"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.6rem',
              borderRadius: '6px',
              background: wireframe ? 'rgba(59, 130, 246, 0.28)' : 'rgba(11, 14, 19, 0.85)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              color: '#e2e8f0',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Box size={13} /> Wire
          </button>
          <button
            type="button"
            onClick={() => setShowGrid((v) => !v)}
            title="Toggle Reference Grid"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.6rem',
              borderRadius: '6px',
              background: showGrid ? 'rgba(59, 130, 246, 0.22)' : 'rgba(11, 14, 19, 0.85)',
              border: '1px solid rgba(148, 163, 184, 0.25)',
              color: '#e2e8f0',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Grid3X3 size={13} /> Grid
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            title="Toggle Auto-Rotate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.6rem',
              borderRadius: '6px',
              background: autoRotate ? 'rgba(59, 130, 246, 0.22)' : 'rgba(11, 14, 19, 0.85)',
              border: '1px solid rgba(148, 163, 184, 0.25)',
              color: '#e2e8f0',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <RefreshCw size={13} /> Spin
          </button>
          <button
            type="button"
            onClick={resetCamera}
            title="Reset Camera"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.6rem',
              borderRadius: '6px',
              background: 'rgba(11, 14, 19, 0.85)',
              border: '1px solid rgba(148, 163, 184, 0.25)',
              color: '#e2e8f0',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};
