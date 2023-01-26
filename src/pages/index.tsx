import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        alt="A man running a chain mortising machine in a workshop."
        src="../images/chain_mortiser.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"></Seo>

export default IndexPage