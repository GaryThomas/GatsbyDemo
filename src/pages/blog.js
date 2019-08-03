//
// Generate a list of available blog posts using internal files (*.md)
//
import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do,YYYY")
          }
        }
      }
    }
  `)
  // const linkName = `/blog/${edge.node.slug}`
  // console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
