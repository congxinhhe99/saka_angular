import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterModule } from './register/register.module';
import { VerifyNewAccountModule } from './verify-new-account/verify-new-account.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { VerifyNewPasswordModule } from './verify-new-password/verify-new-password.module';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterModule,
    VerifyNewAccountModule,
    ForgotPasswordModule,
    VerifyNewPasswordModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
