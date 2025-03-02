import classes from './skillsContainer.module.css'
import javascriptLogo from '../public/javascript.svg';

export default function SkillsContainer() {
    return (
        <div className={classes.container}>
            <div className={classes.TechStack}>
                <h1>Tech Stack</h1>
                <div className={classes.techstackList}>
                     <p>Javascript</p>
                     <p>Typescript</p>
                     <p>PostgresSQL</p>
                     <p>React</p>
                     <p>Next.js</p>
                     <p>Node.js</p>
                </div>
            </div>
            <div className={classes.SoftSkills}>
                <h1>Soft Skills</h1>
                <div className={classes.SoftskillsList}>
                    <p>Collaboration</p>
                    <p>Communication</p>
                    <p>Problem-solving</p>
                    <p>Attention to detail</p>
                    <p>Adaptability</p>
                    <p>Initiative</p>
                </div>
            </div>
        </div>
    )
}