import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNewPasswordComponent } from './verify-new-password.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [VerifyNewPasswordComponent],
  exports: [VerifyNewPasswordComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
  ]
})
export class VerifyNewPasswordModule { }
