import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  buttons4ActionSheet: any[] = [
    {
      text: "OK",
      role: "destructive",
      icon: "trash",
      cssClass: "red-color",
      data: {
        action: "delete"
      },
    },
    {
      text: "Cancel",
      role: "cancel",
      icon: "refresh",
      cssClass: "blue-color",
      data: {
        action: "cancel"
      },
    }
  ]
  constructor(
    private actionSheetCrtl: ActionSheetController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  onClickASI(ev: any) {
    console.log(ev);
  }


  async onClickASC() {
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Eliminar Registro',
      subHeader: 'Esta opcion no puede deshacerse',
      backdropDismiss: true,
      buttons: this.buttons4ActionSheet,
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    console.log(result);
    let message = "";
    let position:any = 'middle';
    if(result.role ==="backdrop"){
      console.log("Ninguna opción seleccionada");
      message:'Ninguna opcion';
      position:'buttom';
    }else{
      const action = result.data.action;
      console.log(action);
      if(action ==="delete"){
        message = "Ninguna opción eleccionada";
        position ="buttom";
      }
    }

    const toast = await this.toastController.create({
      message:message,
      duration:1500,
      position: position,
    });

    await toast.present();

    /*const {role} = await actionSheet.onDidDismiss();
    console.log(role);*/
  }
}
