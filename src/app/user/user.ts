import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return this.avatar;
  }

  onSelectUser() {}

}
