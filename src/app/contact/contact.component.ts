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
    private form: Contact;
    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService
    ) {

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
    }

    ngOnDestroy(): void {}

    add(text: string): void {
        text = text.trim();
        if (!text) { return; }
        this.contactService.create(text)
            .then(body => {
                this.form.push(body);
            });
    }
}
