import { Component, OnInit } from '@angular/core';
import UserModel from '../../models/user.model';
import { User } from '../../providers/providers';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomePageComponent implements OnInit {

    private dataUser: Object = {};
    private loading: boolean = false;

    constructor(
        private user: User,
        private router: Router
    ) {}

    ngOnInit() {
        this.getUser();
    }
    
    getUser() {
        this.loading = true;

        this.user.getUser().subscribe((resp) => {
            this.loading = false;
            
            if(!!resp.data && !!resp.data.error) {
                this.router.navigate(['/login']);
                return;
            }

            this.dataUser = new UserModel(resp.data.account);
        }, (err) => {
            this.loading = false;
            console.log('Error: ', err);
        });
    }
}