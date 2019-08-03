import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello!</h1>
            <h2>Hi, I'm the droid in your computer...</h2>
            <p><Link to="/about">About this site</Link></p>
        </Layout>
    )
}

export default IndexPage
