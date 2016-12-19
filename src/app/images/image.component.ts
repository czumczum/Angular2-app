import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImageService } from './image.service';
import { Image } from './image.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'myfirst-image',
    templateUrl: 'image.html',
    styleUrls: ['./image.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [ImageService]
})
export class ImageComponent implements OnInit, OnDestroy {
    private image: Image;
    private error: Response;
    private isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private imageService: ImageService
    ) {

    }

    /**
     * TODO: Note about non-observable param
     */
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.imageService.get(id).subscribe(
            (data)  => this.image = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
