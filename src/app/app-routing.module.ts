import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FundsComponent} from "./pages/funds/funds.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";
import {UserFormComponent} from "./pages/user-form/user-form.component";
import {UsersComponent} from "./pages/users/users.component";

const routes: Routes = [
  { path: '', redirectTo: 'funds', pathMatch: 'full' },
  { path: 'funds', component: FundsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'user', component: UserFormComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
