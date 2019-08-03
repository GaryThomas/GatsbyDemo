import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>Something goes here...</p>
            <p>Contact me <Link to="/contact">here </Link></p>
        </Layout>
    )
}

export default AboutPage