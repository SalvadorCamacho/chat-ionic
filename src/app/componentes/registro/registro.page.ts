import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email : string;
  public password : string;
  public name : string;

  constructor(private auth : AuthService,
       private ruta : Router) { }

  ngOnInit() {
  }

  registrar(){
    this.auth.registrer(this.email, this.name, this.password).then(
      aut => {
        this.ruta.navigate(['/home']);
        alert('Bienvenido o bienvenida ');
      }).catch( e => alert('Ocurrió un error: '+ e));
  }


}
