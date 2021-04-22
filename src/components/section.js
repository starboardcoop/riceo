import React from "react"

const Section = (props) => (
    <section id={props.id}>
        {
            props.html != null &&
            <div dangerouslySetInnerHTML={{__html: props.html}}></div>
        }
        {
            props.html == null &&
            <div>
                {props.children}
            </div>
        }
    </section>
)

export default Section