import { Component, OnInit } from '@angular/core';
import { CameraResultType, Camera, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imageOptions: ImageOptions = {
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    saveToGallery: true
  }

  public image:string = '';

  constructor() { }

  async ngOnInit() {
    
  }

  async launchCamera() {
    const image = await Camera.getPhoto(this.imageOptions);
    var imageUrl = image.webPath;
  }

  launchGallery() {
    
  }
}
