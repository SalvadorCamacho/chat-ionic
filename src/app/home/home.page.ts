import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatComponent } from '../componentes/chat/chat.component';
import { ModalController } from '@ionic/angular';
import { ChatService } from '../servicios/chat.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  public chats : any=[];

  constructor(private outService : AuthService,
    private modal : ModalController,
    private chatService: ChatService,
    public actionSheetController: ActionSheetController) {}

  ngOnInit(): void {
      this.chatService.getChatRooms().subscribe( chats => {
         this.chats = chats;
      })
  }

  salir(){
    this.outService.logout();
  }

   openChat(chat : any){
     this.modal.create({
       component : ChatComponent,
       componentProps : {
          chat: chat
       }
     }).then( (modal) => modal.present());
   }


   async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cerrar sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.salir();
        }
      }]
    });
    await actionSheet.present();
   }

}
