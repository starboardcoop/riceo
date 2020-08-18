import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Slides from "./hero-slides"
import styles from "./hero.module.css"

const SlideLinks = () => (
    <StaticQuery 
        query={graphql`
          {
            heroJson {
              slides {
                title
              }
            }
          }
        `}

        render={data => (
            data.heroJson.slides.map((slide, index) => (
                <Link to={"#slide" + (index + 1)} key={index}>&#8226;</Link>
            ))
        )}
    />
)

const Hero = () => (
    <div>
        <div className={styles.slides}>
            <Slides />
        </div> 
        <div className={styles.slideLinks}>
            <SlideLinks />
        </div>
    </div>
)

export default Hero