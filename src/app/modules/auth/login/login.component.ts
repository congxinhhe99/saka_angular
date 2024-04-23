import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthModel, IAuthModel } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    formInput!: FormGroup;

    constructor(
        public layoutService: LayoutService,
        private readonly authService:AuthService,
        private readonly messageService: MessageService,
        private readonly router:Router
    ) { }

    ngOnInit(): void {
        this.formInput = new FormGroup({
            userName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
        });
    }

    submit(){
        if(this.formInput.invalid){
            return;
        }
        this.authService.signIn({
            userName: this.formInput.value.userName,
            password: this.formInput.value.password,
        } as IAuthModel).subscribe(res => {
            this.router.navigateByUrl("/app");
        }, (error) => {
            if(error.status == HttpStatusCode.NotAcceptable || error.status == HttpStatusCode.NotFound){
                this.messageService.add({ severity: 'warn', summary: 'Warn', detail: "error.message "});
            }
        })
    }
}
