import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { AppComponent } from './app.component';
import { RestProvider } from './provider/rest.service';
import { UtilsService } from './provider/utils.service';
import { Storage } from "@ionic/storage-angular";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    FormBuilder,
    Storage,
    RestProvider,
    UtilsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class ViewsModule {}
