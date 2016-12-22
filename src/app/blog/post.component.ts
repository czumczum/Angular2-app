import {Component, ViewEncapsulation, OnInit, OnDestroy, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from './blog.service';
import { Blog } from './blog.model';

import { CommentsService } from '../comments/comments.service';
import { Comments } from '../comments/comments.model';

import { Response } from '@angular/http';

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'my-blog__post',
    templateUrl: './post.html',
    styleUrls: ['./post.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [BlogService, CommentsService],
})

export class PostComponent implements OnInit, OnDestroy {
    private blog: Blog;
    private comments: Comments[];
    private error: Response;
    private isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private commentsService: CommentsService
    ) {
    }

    /**
     * TODO: Note about non-observable param
     */
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        // let comments = this.comments;
        this.blogService.get(id).subscribe(
            (data)  => this.blog = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
        this.commentsService.getAll().subscribe(
            (data)  => this.comments = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}