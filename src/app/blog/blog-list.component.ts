import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { BlogService } from './blog.service';
import { Blog } from './blog.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches articles list from HTTP API and displays them.
 */
@Component({
    selector: 'my-blog',
    templateUrl: './blog-list.html',
    styleUrls: ['./blog-list.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [BlogService]
})
export class BlogComponent implements OnInit, OnDestroy {
    private blogPosts: Blog[];
    private error: Response;
    private isLoading: boolean = true;

    constructor(private blogService: BlogService) {}

    ngOnInit(): void {
        this.blogService.getAll().subscribe(
            (data)  => this.blogPosts = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
