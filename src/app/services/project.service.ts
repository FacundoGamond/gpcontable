//Modulos para hacer peticiones ajax
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelos
import { Email } from '../models/email'

//Url api
import { Global } from './global';

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url
    }

    sendEmail(data: Email): Observable<any>{
        let params = JSON.stringify(data);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'send-email', params, { headers: headers });
    }
}