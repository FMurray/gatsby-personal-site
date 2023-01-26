import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        alt="A dog sitting under a wooden archway in front of a house"
        src="../images/IMG_1676.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"></Seo>

export default IndexPage