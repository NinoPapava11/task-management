import { Component } from '@angular/core';
import { Header } from './Header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
}
