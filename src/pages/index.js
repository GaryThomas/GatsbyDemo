import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello!</h1>
            <h2>Hi, I'm the droid in your computer...</h2>
            <p><Link to="/about">About this site</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage
