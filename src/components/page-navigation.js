import React from "react"

export default (props) => (
    <div className="w-full bg-secondary px-8 py-2">
        <nav className="flex flex-row items-center space-x-4">
            { props.sections.map(section => <a href={`#${section.id}`} key={section.id} className="rounded-full px-3 py-1 text-sm hover:bg-primary hover:text-white">{section.title}</a>) }
        </nav>
    </div>
)