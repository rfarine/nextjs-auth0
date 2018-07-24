import React, { Component } from 'react'
import pageWrapper from './pageWrapper'

// TODO: ...renderProps?
const secure = Page =>
  class SecurePage extends Component {
    static getInitialProps(ctx) {
      return Page.getInitialProps && Page.getInitialProps(ctx)
    }

    render() {
      if (!this.props.isAuthenticated) {
        return <NotAuthorized />
      }
      return <Page {...this.props} />
    }
  }

export default Page => pageWrapper(secure(Page))
