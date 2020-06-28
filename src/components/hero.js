import React from "react"
import Image from "../components/image"
import styles from "./hero.module.css"

const Hero = () => (
    <div >
        <div className={styles.container}>
            <div className={styles.slide} id="slide1">
                <Image />
                <section className={styles.heroOverlay}>
                    <h1>Center for Employee Ownership</h1>
                    <h3>Supporting and promoting worker cooperatives in Rhode Island.</h3>
                    <a className="button">Contact</a>
                </section>
            </div>
            <div className={styles.slide} id="slide2">
                <Image />
                <section className={styles.heroOverlay}>
                    <h1>Center for Employee Leadership</h1>
                    <h3>Supporting and promoting worker cooperatives in Rhode Island.</h3>
                    <a className="button">Contact</a>
                </section>
            </div>
        </div> 
        <div className={styles.sliderlinks}>
            <a href="#slide1">&#8226;</a>
            <a href="#slide2">&#8226;</a>
        </div>
    </div>
    
)

export default Hero