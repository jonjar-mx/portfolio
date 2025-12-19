import ExperienceTimeline from '../components/experience/ExperienceTimeline'
import '../styles/experience.css'

export default function Experience() {
  return (
    <>
      <h1>Experiencia</h1>
      <p className="experience-intro">
        Trayectoria profesional enfocada en soporte, procesos, tecnología
        y creación de soluciones prácticas para equipos y clientes.
      </p>

      <ExperienceTimeline />
    </>
  )
}

