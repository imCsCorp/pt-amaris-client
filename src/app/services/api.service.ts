import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Transaction} from "../models/transaction.model";
import {Fund} from "../models/fund.model";

const API_BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${API_BASE_URL}/funds`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_BASE_URL}/funds/transactions`);
  }

  subscribeToFund(payload: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/funds/subscribe`, payload);
  }

  cancelFund(payload: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/funds/cancel`, payload);
  }

  createUser(user: any) {
    return this.http.post(`${API_BASE_URL}/users`, user);
  }

  getUsers() {
    return this.http.get(`${API_BASE_URL}/users`);
  }
}
