import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTransactions().subscribe((res) => {
      this.transactions = res;
    });
  }
}
