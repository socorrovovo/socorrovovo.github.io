import React from 'react';

import { auth } from '../../config';

const SignOutButton = () =>
  <span className="link"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </span>

export default SignOutButton;