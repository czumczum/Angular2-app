import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { ImageService } from './image.service';
import { Image } from './image.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches articles list from HTTP API and displays them.
 */
@Component({
    selector: 'myfirst-image-list',
    templateUrl: './image-list.html',
    styleUrls: ['image-list.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [ImageService]
})
export class ImageListComponent implements OnInit, OnDestroy {
    private images: Image[];
    private error: Response;
    private isLoading: boolean = true;

    constructor(private imageService: ImageService) {}

    ngOnInit(): void {
        this.imageService.getAll().subscribe(
            (data)  => this.images = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
