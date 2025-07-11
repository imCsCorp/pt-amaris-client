import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: User[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
