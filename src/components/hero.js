import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.css"
import Slide from "../components/hero-slide"
import { graphql, StaticQuery } from 'gatsby'


const Slides = () => (
    <StaticQuery
      query={graphql`
      {
        settingsJson {
          slides {
            title
            subtitle
            content
            button {
              label
              link
            }
          }
        }
      }
      `}
      
      render={data => (
        data.settingsJson.slides.map((slide, index) => (
            <Slide className={styles.slide} id={"slide" + (index + 1)}>
                <section className={styles.overlay}>
                    <h1>{slide.title}</h1>
                    <h2>{slide.subtitle}</h2>
                    <h3>{slide.content}</h3>
                    <Link className="button" to={slide.button.link}>{slide.button.label}</Link>
                </section>
            </Slide>
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
            <Link to="#slide1">&#8226;</Link>
            <Link to="#slide2">&#8226;</Link>
        </div>
    </div>
)

export default Hero