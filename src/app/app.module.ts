import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './pages/funds/funds.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    TransactionsComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
