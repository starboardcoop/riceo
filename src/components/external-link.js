import React from "react"

export default (props) => (
    <a href={props.to} target="_blank" rel="noreferrer">{props.children}</a>
)