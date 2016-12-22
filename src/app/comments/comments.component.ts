import {Component, ViewEncapsulation, OnInit, OnDestroy, NgModule, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';

import {CommentsService} from "./comments.service";
import {Comments} from "./comments.model";
import { BlogService } from '../blog/blog.service';

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'my-comment',
    templateUrl: './comments.html',
    styleUrls: ['./comments.scss'],
    encapsulation: ViewEncapsulation.Native,
    providers: [CommentsService],
})

export class CommentsComponent implements OnInit, OnDestroy {
    @Input() blogId:number;
    private postId: Comments;
    private body: Comments;
    private name: Comments;
    private comments: Comments[];
    private error: Response;
    private isLoading: boolean = true;
    private date: any = new Date().toLocaleString();
    private blog: any = BlogService;
    private router;
    private routeParams;
    private zone;

    constructor(
        private route: ActivatedRoute,
        private commentsService: CommentsService
    ) {

    }

    renavigate(): void {
        // this.router.navigate('RouteName', this.routeParams.params);
        // this.zone.run();
    }

    reload():void {
        this.commentsService.getAll().subscribe(
            (data)  => this.comments = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.reload();
    }

    ngOnDestroy(): void {}

    add(body: string, name: string, date: string, postId: number): void {
        body = body.trim();
        name = name.trim();
        if (!body || !postId || !name) { return; }
        this.commentsService.create(body, name, date, postId)
            .then(comment => {
                this.comments.push(comment);
            });
    }

}
