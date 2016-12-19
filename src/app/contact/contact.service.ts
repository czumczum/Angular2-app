import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact.model';

const API_ENDPOINT = '/posts';

@Injectable()
export class ContactService {
    constructor(private http: Http) {}
        private headers = new Headers({'Content-Type': 'application/json'});

    create(text: string): Promise<Contact> {
        return this.http
            .post(API_ENDPOINT, JSON.stringify({text: text}), {headers: this.headers})
            .toPromise()
            .then(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
