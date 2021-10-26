import { Component } from '@angular/core';

import { Amplify } from '@aws-amplify/core';

import awsExports from '@environments/auth-with-phone-and-sms-mfa/src/aws-exports';

@Component({
  selector: 'sign-in-sms-mfa',
  templateUrl: 'sign-in-sms-mfa.component.html',
})
export class SignInSMSMFAComponent {
  constructor() {
    Amplify.configure(awsExports);
  }
}
