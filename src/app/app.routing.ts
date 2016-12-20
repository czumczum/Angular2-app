import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-list.component';

import { ImageComponent } from './images/image.component';
import { ImageListComponent } from './images/image-list.component';

import { ContactComponent } from './contact/contact.component';

import { PostComponent } from './blog/post.component';
import { BlogComponent } from './blog/blog-list.component';



const appRoutes: Routes = [
    { path: 'articles/:id', component: ArticleComponent },
    { path: 'articles', component: ArticleListComponent },

    { path: 'images/:id', component: ImageComponent },
    { path: 'images', component: ImageListComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'posts/:id', component: PostComponent },
    { path: 'blog', component: BlogComponent }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
