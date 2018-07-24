import React from 'react'
import { authorize } from '../../utils/auth0'

import pageWrapper from '../../components/page/pageWrapper'

class SignIn extends React.Component {
  componentDidMount() {
    authorize()
  }

  render() {
    return null
  }
}

export default pageWrapper(SignIn)
