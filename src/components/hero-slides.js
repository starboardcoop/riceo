import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Slide from "./hero-slide"
import styles from "./hero.module.css"

export default () => (
    <StaticQuery
      query={graphql`
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
      `}

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