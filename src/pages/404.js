import React from 'react'
import { Link } from 'gatsby'
import "../components/layout"
import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <h1>Page not found!</h1>
            <p>Try something <Link to="/">else</Link></p>
        </Layout>
    )
}

export default NotFound