import {useRef, useEffect,} from "react";
import gsap from 'gsap'

const Starscape = ({ densityRatio = 0.5, sizeLimit = 5, defaultAlpha = 0.5 }) => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const starsRef = useRef(null)
  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d')
    const LOAD = () => {
      const VMIN = Math.min(window.innerHeight, window.innerWidth)
      const STAR_COUNT = Math.floor(VMIN * densityRatio)
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        x: gsap.utils.random(0, window.innerWidth, 1),
        y: gsap.utils.random(0, window.innerHeight, 1),
        size: gsap.utils.random(1, sizeLimit, 1),
        scale: 1,
        alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
      }))
    }
    const RENDER = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      starsRef.current.forEach(star => {
        contextRef.current.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`
        contextRef.current.beginPath()
        contextRef.current.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2)
        contextRef.current.fill()
      })
    }
    LOAD()
    RENDER()

  }, [densityRatio, sizeLimit])
  return <canvas ref={canvasRef} />
}

export default Starscape