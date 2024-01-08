import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy ,
    },
    {
      provide: Camera,
      useValue: Camera
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
