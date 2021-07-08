import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {CustomerService} from '../../shared/services/customer.service';
import {Customer} from '../../shared/models/customer';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss']
})
export class CustomersNewComponent implements OnInit {
  public formBrand: FormGroup = new FormGroup({});
  public customer!: Customer;
  hasError!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    if (this.router.url.includes('clientes/cliente')) {
      this.route.params.pipe(
        map(p => p.id)
      ).subscribe(id => {
        this.customerService.getAllById(id)
          .subscribe(r => {
            this.customer = r;
            this.createForm();
          }, () => {
            this.hasError = true;
          });
      });
    }
    this.createForm();

  }

  private createForm(): void {
    this.formBrand = this.formBuilder.group({
      id: new FormControl(this.customer?.id ? this.customer.id : null),
      name: new FormControl(this.customer?.name ? this.customer.name : '', Validators.required),
      email: new FormControl(this.customer?.email ? this.customer.email : '', Validators.required),
      phone: new FormControl(this.customer?.phone ? this.customer.phone : '', Validators.required),
    });
  }

  cssError(field: any): any {
    return {
      'is-invalid': field.errors && field.touched
    };
  }

  save(): void {
    if (this.customer) {
      this.customerService.update(this.formBrand.value)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigateByUrl('/clientes');
        }, () => {
          this.hasError = true;
        });
    } else {
      this.customerService.save(this.formBrand.value)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigateByUrl('/clientes');
        }, () => {
          this.hasError = true;
        });
    }

  }

}
