import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Blog } from './blog.model';

const API_ENDPOINT = 'http://localhost:3000/posts';

/**
 * A simple service which fetches data from HTTP API.
 *
 */
@Injectable()
export class BlogService {
    constructor(private http: Http) {}

    public get(id: number): Observable<Blog> {
        return this.http
            .get(API_ENDPOINT + '/' + id)
            .map(this.extractData);
    }

    public getAll(): Observable<Blog[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
