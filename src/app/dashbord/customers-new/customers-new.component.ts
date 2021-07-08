import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss']
})
export class CustomersNewComponent implements OnInit {
  public formBrand: FormGroup = new FormGroup({});
  public brand!: any;
  hasError!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    if (this.router.url.includes('clientes/cliente')) {
      this.route.params.pipe(
        map(p => p.id)
      ).subscribe(id => {
        this.createForm();
      });
    }
    this.createForm();

  }

  private createForm(): void {
    this.formBrand = this.formBuilder.group({
      id: new FormControl(this.brand?.id ? this.brand.id : null),
      name: new FormControl(this.brand?.name ? this.brand.name : '', Validators.required),
      email: new FormControl(this.brand?.name ? this.brand.name : '', Validators.required),
      phone: new FormControl(this.brand?.name ? this.brand.name : '', Validators.required),
    });
  }

  cssError(field: any): any {
    return {
      'is-invalid': field.errors && field.touched
    };
  }

}
