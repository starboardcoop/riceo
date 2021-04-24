import React from "react"

export default (props) => (
    <header className="bg-gray-300 mb-6">
        <div className="bg-white bg-opacity-50 mx-auto px-4 py-8 md:w-2/3 lg:w-1/2">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.content}</h3>
        </div>
    </header>
)