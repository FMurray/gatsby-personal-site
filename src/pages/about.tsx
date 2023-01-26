// Step 1: Import React
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Home">
      <h1>About Me</h1>
      <StaticImage
        alt="A man running a chain mortising machine in a workshop."
        src="../images/chain_mortiser.png"
      />
    </Layout>

  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage