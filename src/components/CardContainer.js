import styles from '@/src/styles/cardComponent.module.css'
import ProjectCard from '../components/ProjectCard'

export default function CardContainer() {
    return (
    <div className={styles.cardGridContainer}>
        
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard /> 
        
    </div>
    )
}