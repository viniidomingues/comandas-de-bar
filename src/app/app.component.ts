import { Component } from '@angular/core';

import { LoginComponent } from './components/pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `<app-login />`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onLogin(event: any) {
    // Implemente a lógica de autenticação aqui.
    console.log('Usuário:', event.username);
    console.log('Senha:', event.password);
  }
}
