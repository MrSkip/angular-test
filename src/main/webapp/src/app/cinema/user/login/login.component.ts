import {Component, OnInit} from '@angular/core';
import './login-animation.js';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor() {
        (window as any).initialize();
    }

    ngOnInit() {
    }

    login() {
        console.log(`email: ${this.email} password: ${this.password}`);
        alert(`Email: ${this.email} Password: ${this.password}`)
    }

}
