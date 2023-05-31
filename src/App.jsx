import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <h3 style={{ pointerEvents: "none" }}>Mouse Follower</h3>
      <div style={{
        position: "absolute",
        backgroundColor: "#000000dc",
        border: '1px solid #fff',
        borderRadius: '100%',
        opacity: 0.8,
        pointerEvents: "none",
        top: -25,
        left: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>{enabled ? "Desactivar" : "Activar"} seguir Puntero</button>
    </main>
  )
}

export default App
