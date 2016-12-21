import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {ContactService} from "./contact.service";
import {Contact} from "./contact.model";

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'myfirst-contact',
    templateUrl: 'contact.html',
    styleUrls: ['./contact.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [ContactService]
})
export class ContactComponent implements OnInit, OnDestroy {
    private text: Contact;
    private name: Contact;
    private title: Contact;
    private date: any = new Date().toLocaleString();
    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService
    ) {

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
    }

    ngOnDestroy(): void {}

    add(title: string, text: string, name: string, date: string): void {
        title = title.trim();
        name = name.trim();
        if (!title || !text || !name) { return; }
        this.contactService.create(title, text, name, date)
    }
}
