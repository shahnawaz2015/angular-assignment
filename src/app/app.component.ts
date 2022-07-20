import { Component } from '@angular/core';
import { User } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  loadData = true;
  selectedUser?: User;
  isCreateUser? = false;

  editUser(user: User) {
    this.selectedUser = user;
  }
  createUser(value: boolean) {
    this.isCreateUser = value;
  }
  abcd(event: boolean) {
    this.isCreateUser = event;
    this.selectedUser = undefined;
  }

  loaderClose(event: boolean) {
    this.loadData = event;
  }
}
