import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeBackgroundProps {
  theme: 'light' | 'dark'
}

export function ThreeBackground({ theme }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const animationIdRef = useRef<number>()
  
  // Mouse interaction state
  const mouseRef = useRef({
    isDown: false,
    previousX: 0,
    previousY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0
  })

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Set background color based on theme
    const bgColor = theme === 'light' 
      ? new THREE.Color('hsl(263, 50.00%, 87.50%)') // Light beige
      : new THREE.Color('hsl(31, 94%, 3%)')  // Very dark

    scene.background = bgColor

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create geometries
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.6, 8, 6),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.OctahedronGeometry(0.7),
    ]

    // Orange color variations
    const orangeColors = [
      '#FF8C00', // Dark orange
      '#FF7F50', // Coral
      '#FFA500', // Orange  
      '#FF6347', // Tomato
      '#FF4500', // Orange red
    ]

    // Create materials
    const materials = orangeColors.map(color => 
      new THREE.MeshBasicMaterial({ 
        color,
        transparent: true,
        opacity: theme === 'light' ? 0.6 : 0.8
      })
    )

    // Create floating objects
    const objects: Array<{
      mesh: THREE.Mesh
      velocity: THREE.Vector3
      rotationSpeed: THREE.Vector3
    }> = []

    for (let i = 0; i < 80; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = materials[Math.floor(Math.random() * materials.length)]
      const mesh = new THREE.Mesh(geometry, material)

      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      )

      // Random scale
      const scale = Math.random() * 2 + 0.5
      mesh.scale.setScalar(scale)

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      scene.add(mesh)

      objects.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      })
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Update objects
      objects.forEach(({ mesh, velocity, rotationSpeed }) => {
        // Move objects
        mesh.position.add(velocity)

        // Rotate objects
        mesh.rotation.x += rotationSpeed.x
        mesh.rotation.y += rotationSpeed.y
        mesh.rotation.z += rotationSpeed.z

        // Boundary checking - wrap around
        if (mesh.position.x > 100) mesh.position.x = -100
        if (mesh.position.x < -100) mesh.position.x = 100
        if (mesh.position.y > 100) mesh.position.y = -100
        if (mesh.position.y < -100) mesh.position.y = 100
        if (mesh.position.z > 100) mesh.position.z = -100
        if (mesh.position.z < -100) mesh.position.z = 100
      })

      // Smooth interpolation for mouse-controlled rotation
      const mouse = mouseRef.current
      mouse.currentRotationX += (mouse.targetRotationX - mouse.currentRotationX) * 0.05
      mouse.currentRotationY += (mouse.targetRotationY - mouse.currentRotationY) * 0.05

      // Combine gentle floating motion with mouse interaction
      const baseTime = Date.now() * 0.0005
      const floatX = Math.sin(baseTime) * 5
      const floatY = Math.cos(baseTime * 0.6) * 3

      // Calculate camera position based on mouse rotation
      const radius = 50
      const x = Math.sin(mouse.currentRotationY) * Math.cos(mouse.currentRotationX) * radius + floatX
      const y = Math.sin(mouse.currentRotationX) * radius + floatY
      const z = Math.cos(mouse.currentRotationY) * Math.cos(mouse.currentRotationX) * radius

      camera.position.set(x, y, z)
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Mouse event handlers
    const handleMouseDown = (event: MouseEvent) => {
      const mouse = mouseRef.current
      mouse.isDown = true
      mouse.previousX = event.clientX
      mouse.previousY = event.clientY
      document.body.style.cursor = 'grabbing'
    }

    const handleMouseUp = () => {
      mouseRef.current.isDown = false
      document.body.style.cursor = 'default'
    }

    const handleMouseMove = (event: MouseEvent) => {
      const mouse = mouseRef.current
      if (!mouse.isDown) return

      const deltaX = event.clientX - mouse.previousX
      const deltaY = event.clientY - mouse.previousY

      // Convert mouse movement to rotation
      mouse.targetRotationY += deltaX * 0.005
      mouse.targetRotationX += deltaY * 0.005

      // Limit vertical rotation to prevent flipping
      mouse.targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, mouse.targetRotationX))

      mouse.previousX = event.clientX
      mouse.previousY = event.clientY
    }

    // Add event listeners
    const canvas = renderer.domElement
    canvas.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)

    // Add cursor styles
    canvas.style.cursor = 'grab'

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return
      
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      
      window.removeEventListener('resize', handleResize)
      
      // Remove mouse event listeners
      const canvas = renderer.domElement
      canvas.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.style.cursor = 'default'
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of Three.js objects
      scene.clear()
      geometries.forEach(geo => geo.dispose())
      materials.forEach(mat => mat.dispose())
      renderer.dispose()
    }
  }, [theme])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
    />
  )
}