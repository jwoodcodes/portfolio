import Image from "next/image"
import styles from "@/src/styles/ebvPage.module.css"
import MainNav from "@/src/components/MainNav"
import Footer from "@/src/components/Footer"
import Link from "next/link"


export default function EBV() {
    return (
        <div className={styles.wholePageWrapper}>
            <MainNav projects={'/#projects'} about={'/#about'} contact={'/#contact'}/>
            
            <h1 className={styles.mainTitle}>ElderBlossom View</h1>



            <div className={styles.sectionWrapper}>
                <Image src='/ebvHomeScreenshot.png' width={900} height={600}></Image>
            

                <p className={styles.infoParagraph}>

                    <Link href='https://ebv.vercel.app/'  className={styles.siteLink}>Go to ElderBlossom View &rarr;</Link>
                    <br /> <br />
                    fdsfsd ds fsfjdsf sfjds k fdskf sdfjdklsfjslkfjsdkf dskfsd
                    dkfj dslkfjdsklf sdklfj dskfjdslkf sdf jsdfsdfsd
                    ksdfkds lfdslgsdjgkfdglsd gjlsd lfdskfsddklsg sdgflsd
                    s fkdlsfds;gklfjgdgjs s s gsdl gdsgjsdg sd gds gsd;g schooldsg
                    s gsdgdsgldls;gl
                </p>
            </div>

            <div className={styles.sectionDividerWrapper}>
      <div className={styles.sectionDivider}></div>
      </div>

            {/* section break */}

            <div className={styles.sectionWrapper}>
                <p className={styles.infoParagraph}>dasf fsdfsd sdfds fsd dsfjdsjf sdhfdshfudsfo s fdsfsd fs sdf sdf schoolsdf
                    sdf sdf sd sd sd gsdfsdf sd fsdf sd fsdd fsdf sdf sdhfdshfudsfos favorite
                    sd fsdf sdfs sdfdsf dsf sdf dsfds fdfsf dsfdsf sdfdsf dsfdsf dsfds
                     dsfds fsdfds fdsfds fdsfsd fdsfds fdsfds fdsf dsfdsf sdf
                </p>
                <Image src='/ebvScreenshot.png' width={900} height={600}></Image>
            
            </div>
            <Footer />

        </div>
    )
}