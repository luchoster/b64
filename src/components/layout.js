import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import Footer from './Footer'
import './layout.css'
import '../assets/scss/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'B64 Encoder / Decoder' },
            { name: 'keywords', content: 'base 64, encode, decode' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <AppBar className="app-bar" position="static" color="primary">
          <Toolbar>
            <img
              className="app-bar-logo"
              src={require('../assets/images/b64_logo.png')}
              alt="Logo"
            />
            <Typography variant="h6" color="inherit">
              {data.site.siteMetadata.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
