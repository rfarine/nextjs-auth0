import React from 'react'

import secure from '../components/page/secure'

const Secret = ({ loggedUser }) => (
  <div>
    <p>
      Hi <strong>{loggedUser.email}</strong>. Try loading this page again using the incognito/private mode of your
      browser.
    </p>
  </div>
)

export default secure(Secret)
