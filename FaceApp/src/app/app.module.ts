import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Componenetes
import { PrincipalComponent } from './vista/principal/principal.component';
import { WebCamComponent } from './componente/web-cam/web-cam.component'
import { RegistralComponent } from './vista/registral/registral.component';
import { IdentificarRostroComponent } from './vista/identificar-rostro/identificar-rostro.component';

// otros
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogIdentificarComponent } from './componente/dialog-identificar/dialog-identificar.component';
import { SidenavComponent } from './componente/sidenav/sidenav.component';
import { DialogAcerdaDeComponent } from './componente/dialog-acerda-de/dialog-acerda-de.component';
import { DialogComoUsarComponent } from './componente/dialog-como-usar/dialog-como-usar.component';
import { IdentificarSenaComponent } from './vista/identificar-sena/identificar-sena.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IdentificarRostroComponent,
    RegistralComponent,
    WebCamComponent,
    DialogIdentificarComponent,
    SidenavComponent,
    DialogAcerdaDeComponent,
    DialogComoUsarComponent,
    IdentificarSenaComponent
  ],
  imports: [
    BrowserModule,
    //Angular material
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    //Otros
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
