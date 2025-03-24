import { Component, inject } from '@angular/core';
import { Login } from '../../../models/login';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login = new Login();

  router = inject(Router);


  logar(){
    if(this.login.username == "user1" && this.login.password == "123"){
      this.router.navigate(['/principal/curso']);
  }else{
    alert("Usuário ou senha inválidos!");
  }
  }

}
