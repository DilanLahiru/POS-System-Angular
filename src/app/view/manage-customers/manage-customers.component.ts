import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from '../../dto/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  customers: Customer[] = [];
  SCustomers: Customer[] = [];
  selectedCustomer: Customer = new Customer('', '', '', 0);

  @ViewChild('txtId', { static: true }) txtId: ElementRef;
  @ViewChild('frmCustomer', { static: true }) frmCustomer: NgForm;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

  saveCustomer(): void {
    alert('Save Click');
// tslint:disable-next-line: max-line-length
    alert(this.selectedCustomer.id + ',' + this.selectedCustomer.address + ',' + this.selectedCustomer.name + ',' + this.selectedCustomer.salary);
    // if (!this.frmCustomer.invalid) {
    this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
            this.customerService.getAllCustomers();
          } else {
            alert('Failed to save the customer');
          }
        });
    // } else {
      // alert("Invalid Data, Please Correct...!");
    // }
  }

  updateCustomer(id: string, name: string, address: string, salary: number): void {
    console.log('Update Click');
    const cusUpdate = new Customer(id, name, address, salary);
    console.log(cusUpdate);
    this.customerService.updateCustomer(cusUpdate).subscribe(
      (result) => {
        alert('Update successfull..');
        this.customerService.getAllCustomers();
      }
    );
  }

  deleteCustomer(id: any): void {
    console.log('Delete Click..');
    const customerIdValDel = id;
    this.customerService.deleteCustomer(customerIdValDel).subscribe(
      (result) => {
        alert('Customer Deleted Successfully...');
        this.customerService.getAllCustomers();
      }
    );
  }

  // searchCustomer(id): void {
  //   console.log('search Customer in component');
  //   const customerIdValSer = id;
  //   this.customerService.searchCustomer(customerIdValSer).subscribe(SCustomers => {
  //     console.log(SCustomers);
  //     this.SCustomers = SCustomers;
  //     console.log('SCustomer : ' + this.SCustomers);
  //   });
  // }
}
