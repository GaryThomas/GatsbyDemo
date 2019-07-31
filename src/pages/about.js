import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>Something goes here...</p>
            <p>Contact me <Link to="/contact">here </Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage