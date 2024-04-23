import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { VerifyNewAccountComponent } from './verify-new-account/verify-new-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyNewPasswordComponent } from './verify-new-password/verify-new-password.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-new-account/:verifyCode', component: VerifyNewAccountComponent },
  { path: 'verify-new-password/:verifyCode', component: VerifyNewPasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
