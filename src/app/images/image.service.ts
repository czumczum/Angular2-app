import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Image } from './image.model';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

/**
 * A simple service which fetches data from HTTP API.
 *
 * TODO: Move API endpoint to app config
 */
@Injectable()
export class ImageService {
    constructor(private http: Http) {}

    public get(id: number): Observable<Image> {
        return this.http
            .get(API_ENDPOINT + '/' + id)
            .map(this.extractData);
    }

    public getAll(): Observable<Image[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
