import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this._fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  authenticate(): boolean | void {
    if (this.loginForm.invalid) {
      return false;
    }

    this.router.navigateByUrl('/lead');
  }
}
