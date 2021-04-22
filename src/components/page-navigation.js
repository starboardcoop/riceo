import React from "react"
import { Link } from "gatsby"

export default (props) => (
    <header>
        <nav>
            { props.sections.map(section => <Link to={`#${section.id}`} key={section.id}>{section.title}</Link>) }
        </nav>
    </header>
)