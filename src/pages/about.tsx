// Step 1: Import React
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'

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
    <main>
      <h1>About Me</h1>
      <p>{data?.site?.siteMetadata?.title}</p>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage