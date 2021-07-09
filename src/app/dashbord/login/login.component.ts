import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {Role} from '../../shared/enums/role.enum';
import {ErrorWarning} from '../../shared/models/error-warning.model';
import {TokenStorageService} from '../../shared/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.loginData = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl(Role.ROLE_USER)

    });
  }

  login(): void {
    this.tokenStorageService.authenticateUserSession(this.loginData.value)
      .pipe(
        take(1)
      ).subscribe(() => {
      this.router.navigateByUrl('/clientes');
    }, (error: ErrorWarning) => {
      console.log(error);
    });
  }
}
