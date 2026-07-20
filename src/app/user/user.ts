import { Component, computed, Input, input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}
