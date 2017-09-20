import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from '../account.interface';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
  }

  addNewAccount(){
    let a: IAccount = {name: this.username.nativeElement.value, password: this.password.nativeElement.value};
    this.accountService.addAccount(a);
    console.log("from add new account component");
    console.log(this.accountService.accounts);
  }

}
