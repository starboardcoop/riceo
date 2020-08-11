import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.css"
import Slide from "../components/hero-slide"
import { graphql, StaticQuery } from 'gatsby'

const slidesQuery = graphql`
{
  heroJson {
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
`

const Slides = () => (
    <StaticQuery
      query={slidesQuery}

      render={data => (
        data.heroJson.slides.map((slide, index) => (
            <Slide className={styles.slide} id={"slide" + (index + 1)} key={index}>
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

const SlideLinks = () => (
    <StaticQuery 
        query={slidesQuery}

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