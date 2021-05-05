import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : any;
  nombre : string;
  constructor(private Afauth: AngularFireAuth,
    private ruta : Router,
    private db: AngularFirestore) { }

  login(email: string, password: string){

      this.Afauth.signInWithEmailAndPassword(email, password)
      .then(res => {
    //rescatar el nombre de usuario
        const uid = res.user.uid;
        this.db.collection('users').doc(uid).valueChanges()
          .subscribe(r => { this.user = r;
          this.nombre = this.user.name;
          //Guardar en localstorage
          localStorage.setItem("usuario", JSON.stringify(this.nombre));
        });

           this.ruta.navigate(['/home']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuaro'));

  }

  logout(){
    this.Afauth.signOut().then(() => {
      this.nombre="";
      this.user = null;
      localStorage.setItem("usuario", JSON.stringify(""));
      this.ruta.navigate(['/login']);
    });
  }

  registrer(email : string, name : string, password : string){
    return new Promise((resolve, reject) => {
      this.Afauth.createUserWithEmailAndPassword(email, password).then
      (res => {
          const uid = res.user.uid;
          this.db.collection('users').doc(res.user.uid).set({
            name : name,
            uid : uid
          });
      //Guardar en localstorage
        localStorage.setItem("usuario", JSON.stringify(name));

          resolve(res);
      }).catch(err => reject(err));
    })
  }



}
