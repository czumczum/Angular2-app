import {Component, ViewEncapsulation, OnInit, OnDestroy, NgModule, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {CommentsService} from "./comments.service";
import {Comments} from "./comments.model";
import {PostComponent} from '../blog/post.component';
import { BlogService } from '../blog/blog.service';

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'my-comment',
    templateUrl: './comments.html',
    styleUrls: ['./comments.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CommentsService]
})

@NgModule({
    declarations: [PostComponent]
})

export class CommentsComponent implements OnInit, OnDestroy {
    private postId: Comments;
    private body: Comments;
    private name: Comments;
    private date: any = new Date().toLocaleString();
    private postComponent: any = PostComponent;
    private blog: any = BlogService;

    constructor(
        private route: ActivatedRoute,
        private commentsService: CommentsService
    ) {

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
    }

    ngOnDestroy(): void {}

    add(body: string, name: string, date: string, postId: number): void {
        body = body.trim();
        name = name.trim();
        if (!body || !postId || !name) { return; }
        this.commentsService.create(body, name, date, postId);

            // //Reload the comments on post page
            // .then(this.postComponent.ngOnInit())
    }
}
