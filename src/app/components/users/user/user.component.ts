import { Component, Input, Output } from '@angular/core';
import { User } from '../../../Models/user.model';
import { EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  faTrashCan = faTrashCan;
  constructor() {}
  @Input() user: User | undefined;
  @Output() onRemove = new EventEmitter<number>();

  deleteUser(userId: number | undefined) {
    //emiting event
    this.onRemove.emit(userId);
  }
}
