import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  addUser(userName: string) {
    this.users.value.push(userName);
    console.log(this.users.value);
  }
}
