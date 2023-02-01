import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Consumir el servicio AutenticacionService
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  urlRedireccion ="";

  login(){
    this.autenticacion.login();
    this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '';
    this.router.navigate([this.urlRedireccion]);
  }


  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  
  va1=0;
  va2=0;
  resultado=0;

  sum=true;
  rest=true;
  multi=true;
  div=true;

  aplicar=false;

  calcular(){
    this.aplicar= true;
  }
}
