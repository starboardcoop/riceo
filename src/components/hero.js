import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.css"
import Slide from "../components/hero-slide"

const Hero = () => (
    <div>
        <div className={styles.slides}>
            <Slide className={styles.slide} id="slide1">
                <section className={styles.overlay}>
                    <h1>Rhode Island</h1>
                    <h2>Center for Employee Ownership</h2>
                    <h3>We promote and support the growing worker co-operative economy in the Ocean State.</h3>
                    <Link className="button" to="/">Contact</Link>
                </section>
            </Slide>
            <Slide className={styles.slide} id="slide2">
                <section className={styles.overlay}>
                    <h1>Local jobs.</h1>
                    <h3>Worker co-ops create sustainable, well-paying local jobs that stay local.</h3>
                    <Link className="button" to="/">Learn more</Link>
                </section>
            </Slide>
        </div> 
        <div className={styles.slideLinks}>
            <Link to="#slide1">&#8226;</Link>
            <Link to="#slide2">&#8226;</Link>
        </div>
    </div>
)

export default Hero