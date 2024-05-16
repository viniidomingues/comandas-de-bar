import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StorageService } from '../../../services/user/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  signupForm!: FormGroup;

  constructor(private storageService: StorageService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get email(): string | any {
    return this.signupForm.get('email')!;
  }

  get password(): string | any {
    return this.signupForm.get('password')!;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(`entrou`);
      const user = this.signupForm.value;
      this.storageService.saveUser(user);
      this.router.navigate(['/home']);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}
