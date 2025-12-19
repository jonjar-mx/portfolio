export default function ExperienceItem({
  role,
  company,
  period,
  description = [],
}) {
  return (
    <div className="experience-item">
      <div className="experience-dot" />

      <div className="experience-content">
        <span className="experience-period">{period}</span>
        <h3>{role}</h3>
        <h4>{company}</h4>

        <ul>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
