import React from 'react'
import Router from 'next/router'

import { setToken } from 'utils/auth'
import { parseHash } from 'utils/auth0'

export default class SignedIn extends React.Component {
  componentDidMount() {
    parseHash((err, result) => {
      if (err) {
        return
      }

      setToken(result.idToken, result.accessToken)
      Router.push('/')
    })
  }

  render() {
    return null
  }
}
