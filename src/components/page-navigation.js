import React from "react"

export default (props) => (
    <div className="w-full bg-secondary flex flex-row px-4 md:px-8 py-2 overflow-x-auto">
        <nav className="flex flex-row items-center space-x-3">
            { props.sections.map(section => <a href={`#${section.id}`} key={section.id} className="w-max rounded-full px-3 py-1 text-sm hover:bg-primary hover:text-white">{section.title}</a>) }
        </nav>
    </div>
)