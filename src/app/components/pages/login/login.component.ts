import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  @Output() login = new EventEmitter<any>();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
      this.loginForm.reset();
    }
  }
  onLogin(event: any) {
    // Implemente a lógica de autenticação aqui.
    console.log('Usuário:', event.username);
    console.log('Senha:', event.password);
  }
}
