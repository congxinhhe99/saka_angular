// src/app/auth.guard.ts

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly router: Router) {}

    canActivate() {
        return true;
        // return this.store.select(LoginPageGroupSelectors.isAuthenticatedSelector).pipe(map(isAuthenticated => {
        //     if (isAuthenticated) {
        //         return true;
        //     }
        //     this.router.navigateByUrl("/");
        //     return false;
        // }));
    }
}
