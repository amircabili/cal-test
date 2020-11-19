import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(
        res => this.user = res,
        err => console.log(err)
      );
  }

}
