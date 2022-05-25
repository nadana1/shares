import { Component, OnInit } from "@angular/core";
import { User } from "../../user";
import { UserService } from "../../user-service.service";
@Component({
  selector: 'ng-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }
 
  ngOnInit(): void {
    this.getUsers();
    
    };
    private getUsers(){
      this.userService.getUsersList().subscribe(data =>{
        this.users = data;
      })
    }
  }
