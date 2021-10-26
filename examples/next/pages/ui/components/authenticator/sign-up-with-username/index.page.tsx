import { Amplify } from '@aws-amplify/core';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '@environments/auth-with-username-no-attributes/src/aws-exports';
Amplify.configure(awsExports);

function App({ signOut }) {
  return <button onClick={signOut}>Sign out</button>;
}

export default withAuthenticator(App, {
  initialState: 'signUp',
});
