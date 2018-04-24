import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../../providers/providers';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.css']
})

export class AuthBoxComponent implements OnInit {

    private form: any;

    constructor(
        private user: User,
        private fb: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.form = this.fb.group({
            login: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])],
            password: [null, Validators.required]
        })
    }

    doLogin() {

        this.user
            .login(this.form['value'])
            .subscribe((resp) => {
                this.router.navigate(['/home']);
            }, (err) => {
                console.log('Error: ', err);
            });
    }

}