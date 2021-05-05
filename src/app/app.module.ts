import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { firebaseConexion } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';

//Servicios
import { AuthService } from './servicios/auth.service';
import { ChatService } from './servicios/chat.service';

//Componente
import { ChatComponent } from './componentes/chat/chat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, ChatComponent],
  entryComponents: [ChatComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConexion),
    AppRoutingModule, FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     ChatService, AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
