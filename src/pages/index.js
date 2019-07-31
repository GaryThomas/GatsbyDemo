import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>Hi, I'm the droid in your computer...</h2>
            <p><Link to="/about">About this site</Link></p>
        </div>
    )
}

export default IndexPage
