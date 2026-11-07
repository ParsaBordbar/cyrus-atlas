import {
  Component,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ErrorInfo,
  type ReactNode,
} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Dict } from '../i18n/en'

function NormalizedModel({ src }: { src: string }) {
  const { scene } = useGLTF(src, false, true)

  const object = useMemo(() => {
    const clone = scene.clone(true)
    const box = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1

    clone.position.set(-center.x, -center.y, -center.z)
    const wrapper = new THREE.Group()
    wrapper.add(clone)
    wrapper.scale.setScalar(2 / maxDim)
    return wrapper
  }, [scene])

  return <primitive object={object} />
}

function MarkReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady()
  }, [onReady])
  return null
}

function MarkFailed({ onError }: { onError: () => void }) {
  useEffect(() => {
    onError()
  }, [onError])
  return null
}

type BoundaryProps = { children: ReactNode; fallback: ReactNode }
type BoundaryState = { failed: boolean }

class ViewerBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false }

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('3D model failed to render', error, info)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

type Props = { src: string; t: Dict; label: string }

export function ModelViewer({ src, t, label }: Props) {
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [spin, setSpin] = useState(true)

  const handleReady = useCallback(() => setReady(true), [])
  const handleFailed = useCallback(() => setFailed(true), [])
  const handleStart = useCallback(() => setSpin(false), [])

  return (
    <div className="viewer" role="region" aria-label={label}>
      <Canvas
        camera={{ position: [2.6, 1.7, 3.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} />
        <directionalLight position={[-6, 3, -4]} intensity={0.8} />
        <ViewerBoundary fallback={<MarkFailed onError={handleFailed} />}>
          <Suspense fallback={null}>
            <NormalizedModel src={src} />
            <MarkReady onReady={handleReady} />
          </Suspense>
        </ViewerBoundary>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={1.5}
          maxDistance={5}
          maxPolarAngle={Math.PI * 0.9}
          autoRotate={spin}
          autoRotateSpeed={0.9}
          onStart={handleStart}
        />
      </Canvas>

      {!ready && !failed && <p className="viewer-note">{t.modelsPage.loading}</p>}
      {failed && <p className="viewer-note viewer-note-error">{t.modelsPage.error}</p>}
      {ready && !failed && <p className="viewer-hint">{t.modelsPage.rotateHint}</p>}
    </div>
  )
}
