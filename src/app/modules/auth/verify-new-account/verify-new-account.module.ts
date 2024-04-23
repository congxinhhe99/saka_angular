import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { VerifyNewAccountComponent } from './verify-new-account.component';

@NgModule({
  declarations: [
    VerifyNewAccountComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ]
})
export class VerifyNewAccountModule { }
