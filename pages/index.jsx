import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

import pageWrapper from 'components/page/pageWrapper'

const Index = ({ isAuthenticated }) => (
  <div>
    <Head>
      <title>NextJS + Auth0</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    {!isAuthenticated && (
      <div>
        Oh no. You aren&#39;t signed in yet.
        <Link href="/auth/sign-in">Sign In</Link>
      </div>
    )}
    {isAuthenticated && (
      <div>
        Go to the <Link href="/secret">super secret page</Link>!
      </div>
    )}
  </div>
)

Index.defaultProps = {
  isAuthenticated: false,
}

Index.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default pageWrapper(Index)
