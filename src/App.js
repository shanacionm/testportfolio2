import logo from './logo.svg';
import './App.css';
import portfolioData from './data';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Portfolio</h1>
            </header>
            <section id="about">
                <h2>About Me</h2>
                <p>{portfolioData.about}</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    {portfolioData.projects.map(project => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    {portfolioData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>{portfolioData.contact}</p>
            </section>
        </div>
    );
}
export default App;
