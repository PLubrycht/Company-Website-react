import './Technologies.css';

const Technologies = () => {
  const techStack = [
    'React',
    'JavaScript (ES6+)',
    'CSS3',
    'HTML5',
    'Flexbox/Grid',
    'Responsywność',
    'Create React App',
    'Figma (design)',
    'Git/GitHub'
  ];

  return (
    <section className="technologies">
      <div className="content">
        <h2 className="technologies-header">Technologie użyte w projekcie</h2>
        <ul className="technologies-list">
          {techStack.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
