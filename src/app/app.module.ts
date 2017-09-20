import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsService } from './accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
