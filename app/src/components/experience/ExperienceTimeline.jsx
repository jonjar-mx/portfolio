import { experience } from '../../data/experience'
import ExperienceItem from './ExperienceItem'

export default function ExperienceTimeline() {
  return (
    <div className="experience-timeline">
      {experience.map((item, i) => (
        <ExperienceItem
          key={i}
          role={item.role}
          company={item.company}
          period={item.period}
          description={item.description}
        />
      ))}
    </div>
  )
}
