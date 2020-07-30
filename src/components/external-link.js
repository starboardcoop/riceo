import React from "react"

export default (props) => (
    <a className={props.className} href={props.to} target="_blank" rel="noreferrer">{props.children}</a>
)