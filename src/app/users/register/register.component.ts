import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RegisterComponent {
  constructor(private usersService: UsersService) {}

  register(user: any) {
    this.usersService.register(user).subscribe(response => {
      console.log('User registered', response);
    });
  }
}
