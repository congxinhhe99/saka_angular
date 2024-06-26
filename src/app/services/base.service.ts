import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BasePaginationInputDto, BasePaginationOutputDto } from '../models/base.model';

@Injectable({
    providedIn: 'root'
})

export class BaseService<TInputDto, TOutputDto> {

    constructor(public http: HttpClient) { }

    public getList(baseUrl:string, input: BasePaginationInputDto): Observable<BasePaginationOutputDto<TOutputDto>> {
        return this.http.post(`${baseUrl}/pagination`, input).pipe(map((m: any) => {
            return {
                totalCount: m.totalItem,
                items: m.items as TOutputDto[]
            } as BasePaginationOutputDto<TOutputDto>
        }));
    }

    public handleError(error: any): Observable<never> {
        return throwError(error);
    }

    public get(baseUrl:string, urlSuffix: string): Observable<TOutputDto> {
        const url = `${baseUrl}/${urlSuffix}`;
        return this.http.get<TOutputDto>(url).pipe(
            catchError(this.handleError)
        );
    }

    public post(baseUrl:string, input: TInputDto): Observable<TOutputDto> {
        const url = `${baseUrl}`;
        return this.http.post<TOutputDto>(url, input).pipe(
            catchError(this.handleError)
        );
    }

    public put(baseUrl:string, urlSuffix: string, input: TInputDto): Observable<TOutputDto> {
        const url = `${baseUrl}/${urlSuffix}`;
        return this.http.put<TOutputDto>(url, input).pipe(
            catchError(this.handleError)
        );
    }

    public delete(baseUrl:string, urlSuffix: string): Observable<any> {
        const url = `${baseUrl}/${urlSuffix}`;
        return this.http.delete<any>(url).pipe(
            catchError(this.handleError)
        );
    }
}