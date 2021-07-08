import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  public loginData: FormGroup = new FormGroup({});
  public loginForm!: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void { 
    this.createForm();  
  }

  private createForm(): void {
    this.loginData = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl( '', Validators.required),
    });
  }

  login() {
    
  }

}

