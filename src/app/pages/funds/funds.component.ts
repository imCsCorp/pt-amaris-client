import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Fund} from "../../models/fund.model";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html'
})
export class FundsComponent implements OnInit {
  funds: Fund[] = [];
  selectedUserId: string = 'fcd471ea-285b-4ef8-92f4';
  notificationType: string = 'EMAIL';

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getFunds().subscribe((res: Fund[]) => {
      this.funds = res;
    });
  }

  subscribe(fundId: number, minimumAmount: number): void {
    const payload = {
      userId: this.selectedUserId,
      fundId,
      notificationType: this.notificationType
    };
    this.api.subscribeToFund(payload).subscribe({
      next: () => alert('Suscripción exitosa'),
      error: err => alert(err.error || 'Error al suscribirse')
    });
  }

  cancel(fundId: number): void {
    const payload = {
      userId: this.selectedUserId,
      fundId,
      notificationType: this.notificationType
    };
    this.api.cancelFund(payload).subscribe({
      next: () => alert('Cancelación exitosa'),
      error: err => alert(err.error || 'Error al cancelar')
    });
  }
}
