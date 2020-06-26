import React from "react"
import Image from "../components/image"
import styles from "./hero.module.css"

const Hero = () => (
    <div className={styles.container}>
        <Image />
        <section className={styles.heroOverlay}>
            <h1>Center for Employee Ownership</h1>
            <h3>Supporting and promoting worker cooperatives in Rhode Island.</h3>
            <a className="button">Contact</a>
        </section>
    </div> 
)

export default Hero