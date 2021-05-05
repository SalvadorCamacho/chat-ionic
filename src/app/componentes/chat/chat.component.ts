import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavParams } from '@ionic/angular';
import { ChatService } from '../../servicios/chat.service';
import { Message } from '../../modelo/Mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('area') foco : any; //Para que tome el foco
  @ViewChild("scrollElement") content: IonContent;

  public chat: any; //objeto que recibe el chat o sala

  public msg : string; //los mensajes
  public room : any;

  constructor(private navParams: NavParams,
    private modal: ModalController,
    private chatService: ChatService) { }

  ngOnInit() {
    this.chat = this.navParams.get('chat');
    //Rescatar mensajes en el objeto room
    this.chatService.getChat(this.chat.id).subscribe(r =>{
      this.room = r;
    })

  }


  ngAfterViewChecked(): void {
    this.content.scrollToBottom(0);
    this.foco.setFocus();
  }

  irAlFinal(){
    this.content.scrollToBottom(0)
  }

  cerrarChat(){
    this.modal.dismiss();
  }


  sendMessage(){
    if(this.msg!=""){

      const nombreUsu = JSON.parse(localStorage.getItem('usuario'));
       const m : Message = {
         content: this.msg,
         type: nombreUsu,
         date: new Date()
       }
       this.chatService.sendMsgToFireBase(m, this.chat.id);
       this.msg = "";
       this.foco.setFocus();
    }
  }

  fecha(f : any){
     let date = f.toDate();
     let anio = date.getYear();
     let mes = date.getMonth();
     let dia = date.getDay();
     let hora = date.getHours();
     let min = date.getMinutes();
     return dia + "/" +  mes + "/" + anio + " - " +hora+ ":"+min+"hrs.";
  }


}
