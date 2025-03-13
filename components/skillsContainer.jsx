import classes from './skillsContainer.module.css'
import javascriptLogo from '../public/javascript.svg';

export default function SkillsContainer() {
    return (
        <div className={classes.container}>
            <div className={classes.TechStack}>
                <h1>Tech Stack</h1>
                <div className={classes.techstackList}>
                     <p className={classes.stackItem}>Javascript</p>
                     <p className={classes.stackItem}>Typescript</p>
                     <p className={classes.stackItem}>PostgresSQL</p>
                     <p className={classes.stackItem}>React</p>
                     <p className={classes.stackItem}>Next.js</p>
                     <p className={classes.stackItem}>Node.js</p>
                </div>
            </div>
            <div className={classes.SoftSkills}>
                <h1>Soft Skills</h1>
                <div className={classes.SoftskillsList}>
                    <p className={classes.stackItem}>Collaboration</p>
                    <p className={classes.stackItem}>Communication</p>
                    <p className={classes.stackItem}>Problem-solving</p>
                    <p className={classes.stackItem}>Attention to detail</p>
                    <p className={classes.stackItem}>Adaptability</p>
                    <p className={classes.stackItem}>Initiative</p>
                </div>
            </div>
        </div>
    )
}