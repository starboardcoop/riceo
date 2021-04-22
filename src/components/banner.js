import React from "react"

export default (props) => (
    <header>
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.content}</h3>
        </div>
    </header>
)