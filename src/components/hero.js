import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import styles from "./hero.module.css"

const Hero = () => (
    <div>
        <div className={styles.slides}>
            <div className={styles.slide} id="slide1">
                <Image />
                <section className={styles.overlay}>
                    <h1>Center for Employee Ownership</h1>
                    <h3>Supporting and promoting worker cooperatives in Rhode Island.</h3>
                    <Link className="button" to="/">Contact</Link>
                </section>
            </div>
            <div className={styles.slide} id="slide2">
                <Image />
                <section className={styles.overlay}>
                    <h1>Local jobs.</h1>
                    <h3>Worker co-ops create sustainable, well-paying local jobs that stay local.</h3>
                    <Link className="button" to="/">Learn more</Link>
                </section>
            </div>
        </div> 
        <div className={styles.slideLinks}>
            <Link to="#slide1">&#8226;</Link>
            <Link to="#slide2">&#8226;</Link>
        </div>
    </div>
)

export default Hero