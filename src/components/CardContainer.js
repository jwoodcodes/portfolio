import styles from '@/src/styles/cardComponent.module.css'
import ProjectCard from '../components/ProjectCard'

export default function CardContainer() {
    return (
    <div className={styles.cardGridContainer}>
        
        <ProjectCard 
        imgSrc='/ebvHomeScreenshot.png' 
        altText='ElderBlossom View'
        title='ElderBlossom View'
        siteDsc='blag asdsad sadas gfdsfsa das dsa dasf dsf sadfs afggdsfsd fasdasd agfdgs fsfdasf sdgsdf adsagdfs fasfasf dsgfdh sdfsfas fsdfdshf dgsdfas fdhfd gsdgs fsdgfds gfdgs dfsdf sdfsdg fdgsd fas fsdg sdgsd gsdfgs'
        
        />  
        <ProjectCard 
        imgSrc='/DDAnalyzerScreenshot.png' 
        altText='Daily Dynasties'
        title='Daily Dynasties'
        siteDsc='blag asdsad sadas gfdsfsa das dsa dasf dsf sadfs afggdsfsd fasdasd agfdgs fsfdasf sdgsdf adsagdfs fasfasf dsgfdh sdfsfas fsdfdshf dgsdfas fdhfd gsdgs fsdgfds gfdgs dfsdf sdfsdg fdgsd fas fsdg sdgsd gsdfgs'
        
        />  
        <ProjectCard 
        imgSrc='/fbScreenshot.png' 
        altText='FB Restaurant'
        title='FB Restaurant'
        siteDsc='blag asdsad sadas gfdsfsa das dsa dasf dsf sadfs afggdsfsd fasdasd agfdgs fsfdasf sdgsdf adsagdfs fasfasf dsgfdh sdfsfas fsdfdshf dgsdfas fdhfd gsdgs fsdgfds gfdgs dfsdf sdfsdg fdgsd fas fsdg sdgsd gsdfgs'
        
        /> 
        
    </div>
    )
}