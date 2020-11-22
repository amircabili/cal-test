import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user = [];
  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(
        res => this.user = res,
        err => {
          if (err instanceof HttpErrorResponse){
            if (err.status === 401){
              this.router.navigate(['/login']);
            }
          }
        }
      );
  }

}
