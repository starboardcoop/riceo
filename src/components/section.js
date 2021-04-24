import React from "react"

const Section = (props) => (
    <section id={props.id} className="p-4">
        <div className="mx-auto md:w-2/3 lg:w-1/2">
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
        </div>
    </section>
)

export default Section