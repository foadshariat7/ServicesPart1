import { Component, OnInit, DoCheck } from '@angular/core';
import { LoggingService } from './logging.service';
import { IAccount } from './account.interface';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit, DoCheck {

  accounts: IAccount[] = [];

  message = "Hello World";

  constructor(private loggingService: LoggingService,
    private accountService: AccountsService) { }

  ngOnInit() {
    this.loggingService.logMessage(this.message);
    // const logService = new LoggingService();
    // console.log(this.message);
    // logService.logMessage(this.message);
    this.accounts = this.accountService.accounts;
  }

  ngDoCheck(): void {
    console.log("from app component");
    console.log(this.accountService.accounts);
  }
}
