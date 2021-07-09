import {Component, OnInit} from '@angular/core';
import {Customer} from '../../shared/models/customer';
import {CustomerService} from '../../shared/services/customer.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  hasError;
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customerService.getAll()
      .pipe(take(1))
      .subscribe(c => {
        this.customers = c;
      }, () => {
        this.hasError = true;
      });
  }

  search(search: string): Customer[] {
    if (search === '' || search === undefined || search === null) {
        return this.customers;
    }
    return this.customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }

}
