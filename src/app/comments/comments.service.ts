import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';


import { Comments } from './comments.model';

const API_ENDPOINT = 'http://localhost:3000/comments';

@Injectable()
export class CommentsService {
    constructor(private http: Http) {}
        private headers = new Headers({'Content-Type': 'application/json'});

    create(body: string, author: string, date: string, post: any): Promise<Comments> {
        return this.http
            .post(API_ENDPOINT, JSON.stringify({body: body, name: author, date: date, postId: post}), {headers: this.headers})
            .toPromise()
            .then(this.extractData);
    }

    public get(id: number): Observable<Comments> {
        return this.http
            .get(API_ENDPOINT + '/' + id)
            .map(this.extractData);
    }

    public getAll(): Observable<Comments[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
