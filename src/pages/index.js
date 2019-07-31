import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello!</h1>
            <h2>Hi, I'm the droid in your computer...</h2>
            <p><Link to="/about">About this site</Link></p>
        </Layout>
    )
}

export default IndexPage
