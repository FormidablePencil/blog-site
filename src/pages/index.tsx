import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/globalStyles.sass"
import { Fab } from '@material-ui/core';
// import Fab from '@material-ui/core/Fab';
// or


//~ is it acually box component that has all the styling props

const IndexPage = () => (
  <Layout>
    <Link to='HomeBlogPage'>Go to home blog page</Link>
    <br />
    <SEO title="Home" />
    <Fab color="secondary" aria-label="add asdasdsad" variant='extended'>sds</Fab>
    <h1 className='test123'>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
