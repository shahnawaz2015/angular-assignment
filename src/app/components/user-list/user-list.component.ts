import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDefaultItems } from 'src/app/DefaultData/Data';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = UserDefaultItems;  // add default projects

  @Output() userSelected = new EventEmitter<User>();

  @Output() newUser = new EventEmitter<boolean>();
  

  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit(user: User): void {
    this.userSelected.emit(user);
    this.newUser.emit(true);
  }

  onDelete(i: number): void {
    this.users.splice(i,1);
  }

  addUser(): void {
    this.newUser.emit(true);
  }

  refreshData(): void {
    window.location.reload();
  }

}
