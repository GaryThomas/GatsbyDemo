import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Something goes here...</p>
            <p>Contact me <Link to="/contact">here </Link></p>
        </div>
    )
}

export default AboutPage