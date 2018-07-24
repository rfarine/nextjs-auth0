import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { getUserFromServerCookie, getUserFromLocalCookie } from '../../utils/auth'

// TODO: ...renderProps?
// Get rid of constructor...
export default Page =>
  class PageWrapper extends Component {
    static getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
      return {
        ...pageProps,
        loggedUser,
        currentUrl: ctx.pathname,
        isAuthenticated: !!loggedUser,
      }
    }

    constructor(props) {
      super(props)

      this.logout = this.logout.bind(this)
    }

    logout(eve) {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`)
      }
    }

    componentDidMount() {
      window.addEventListener('storage', this.logout, false)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logout, false)
    }

    render() {
      const cssFiles = ['https://unpkg.com/normalize.css@5.0.0/normalize.css']
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {cssFiles.map((c, i) => <link key={i} href={c} rel="stylesheet" />)}
            <style>
              {`
            * {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            a {
              cursor: pointer;
            }
            `}
            </style>
            <title>Next.js + auth0</title>
          </Head>
          <div>
            <Page {...this.props} />
          </div>
        </div>
      )
    }
  }
