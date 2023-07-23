import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  usersList: User[] = [];
  deletedUserId: string = '';
  timer: any = null;
  errorMessage: string = '';

  constructor(private userService: UserService) {
    //any additional code
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.usersList = response;
      },
      //simple error handling
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
  removeUser(userId: number) {
    this.usersList = this.usersList.filter((u) => u.id != userId);
    this.deletedUserId = userId.toString();
    setTimeout(() => {
      this.deletedUserId = '';
    }, 500);
  }
}
