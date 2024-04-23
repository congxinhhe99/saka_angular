import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MessageService } from 'primeng/api';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './Interceptor/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './functions/language.function';
import { AuthLocalStorageEnum } from './enums/local-storage.enum';
import { CountryCodeEnum } from './enums/country-code.enum';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        AppComponent, 
        NotfoundComponent
    ],
    imports: [
        ToastModule,
        ProgressSpinnerModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule, 
        AppLayoutModule
    ],
    providers: [
        AuthGuard,
        MessageService,
        { 
          provide: HTTP_INTERCEPTORS, 
          useClass: JwtInterceptor, 
          multi: true 
        },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

    constructor(private translate:TranslateService,){
        const language = localStorage.getItem(AuthLocalStorageEnum.Language) || CountryCodeEnum.English;
        localStorage.setItem(AuthLocalStorageEnum.Language, language);
        translate.setDefaultLang(language);
        translate.use(language);
    }

}
