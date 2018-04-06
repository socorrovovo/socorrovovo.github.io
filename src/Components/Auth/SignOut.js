import React from 'react';

import { auth } from '../../config';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;