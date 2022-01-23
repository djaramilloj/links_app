import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor() { }

  ngOnInit(): void { }

}
