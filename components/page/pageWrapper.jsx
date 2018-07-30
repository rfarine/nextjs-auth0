import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { getUserFromServerCookie, getUserFromLocalCookie } from 'utils/auth'

export default Page =>
  class PageWrapper extends Component {
    constructor(props) {
      super(props)
      this.logout = this.logout.bind(this)
    }

    componentDidMount() {
      window.addEventListener('storage', this.logout, false)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logout, false)
    }

    static getInitialProps(ctx) {
      const loggedUser = process.browser
        ? getUserFromLocalCookie()
        : getUserFromServerCookie(ctx.req)
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
      return {
        ...pageProps,
        loggedUser,
        currentUrl: ctx.pathname,
        isAuthenticated: !!loggedUser,
      }
    }

    logout(event) {
      if (event.key === 'logout') {
        Router.push(`/?logout=${event.newValue}`)
      }
    }

    render() {
      return (
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://unpkg.com/normalize.css@5.0.0/normalize.css"
              rel="stylesheet"
            />
            <title>Next.js + auth0</title>
          </Head>
          <div>
            <Page {...this.props} />
          </div>
        </div>
      )
    }
  }
