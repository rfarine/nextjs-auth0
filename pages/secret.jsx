import React from 'react'
import PropTypes from 'prop-types'
import secure from 'components/page/secure'

const Secret = ({ loggedUser }) => (
  <div>
    <p>
      Hi
      <strong>{loggedUser.email}</strong>
      . Try loading this page again using the incognito/private mode of your
      browser.
    </p>
  </div>
)

Secret.propTypes = {
  loggedUser: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
}

export default secure(Secret)
