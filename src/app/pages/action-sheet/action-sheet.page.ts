import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  buttons4ActionSheet: any[] = [
    {
      text:"OK",
      role:"destructive",
      icon:"trash",
      cssClass:"red-color",
  },
  {
      text:"Cancel",
      role:"cancel",
      icon:"refresh",
      cssClass:"blue-color",
  }
  ]
  constructor() { }

  ngOnInit() {
  }

  onClickASI(ev: any){
    console.log(ev);
  }

}
