import { Role } from "../enums/Role";
import { UsersInterface } from "../interfaces/all-interfaces";

// Project Type
export class User implements UsersInterface {
  constructor (
    public id: string,
    public fName: string,
    public mName: string,
    public lName: string,
    public email: string,
    public phone: string,
    public roles: string,
    public address: string,
    public dateCreated: string) {
  }
}