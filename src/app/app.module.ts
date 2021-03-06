import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-list.component';
import { ImageComponent } from './images/image.component';
import { ImageListComponent } from './images/image-list.component';
import { ContactComponent } from './contact/contact.component';
import {BlogComponent} from "./blog/blog-list.component";
import {PostComponent} from "./blog/post.component";
import {CommentsComponent} from "./comments/comments.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleComponent,
        ImageListComponent,
        ImageComponent,
        ContactComponent,
        BlogComponent,
        PostComponent,
        CommentsComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
