import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'src/app/decorators/dateandtime';
import { NewId } from 'src/app/decorators/newId';
import { Role, RoleEnumMapping } from 'src/app/enums/Role';
import { User } from 'src/app/models/users';
import { UserDefaultItems } from 'src/app/DefaultData/Data';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm = new FormGroup({});
  submitted = false;
  selectedUsers?: User;
  userId?: string;
  emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]{2,3}";
  formText = "Add"
  buttonText = "Save"

  @DateTime dateTime?: string;

  @NewId newId?: string;

  @Input('selectedUser')
  public set selectedUser(value: User | undefined) {
    if (value) {
      this.userId = value.id;
      this.formText = "Update";
      this.buttonText = "Update";
      setTimeout(() => {
        this.userForm.patchValue(
          {
            id: value.id,
            fName: value.fName,
            mName: value.mName,
            lName: value.lName,
            email: value.email,
            phone: value.phone,
            roles: value.roles,
            address: value.address,
            dateCreated: value.dateCreated
          }
        );
      }, 300);
    }
  }

  roles = Object.values(Role);
  suffixEnum2LabelMapping = RoleEnumMapping;

  @Output('closeComponent') closeComponent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      id: [null],
      fName: [null, [Validators.required, Validators.minLength(3)]],
      mName: [null, [Validators.required, Validators.minLength(3)]],
      lName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      phone: [null, [Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      roles: [null, Validators.required],
      address: [null, [Validators.required, Validators.minLength(5)]],
      dateCreated: [null]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    if (this.userId) {
      const objIndex = UserDefaultItems.findIndex((obj => obj.id === this.userId));
      UserDefaultItems[objIndex] = this.userForm.value;
      this.userId = undefined;
    } else {
      this.userForm.value.id = this.newId;
      this.userForm.value.dateCreated = this.dateTime;
      UserDefaultItems.push(this.userForm.value); // add user in arrauy of object
    }

    this.onReset();

  }

  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
    this.closeComponent.emit(false);
  }

}
