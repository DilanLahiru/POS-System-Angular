import {Injectable} from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl = environment.apiUrl + '/customers';

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/auth/customers');
  }
  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, customer);
  }
}
