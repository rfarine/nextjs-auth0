import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import pageWrapper from '../components/page/pageWrapper'

const Index = ({ isAuthenticated }) => (
  <div>
    <Head>
      <title>NextJS + Auth0</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    {!isAuthenticated && (
      <div>
        Oh no. You aren't signed in yet. <Link href="/auth/sign-in">Sign In</Link>
      </div>
    )}
    {isAuthenticated && (
      <div>
        You are totally authenticated, Rae.
        <br />
        Go to the <Link href="/secret">super secret page</Link>!
      </div>
    )}
  </div>
)

export default pageWrapper(Index)
