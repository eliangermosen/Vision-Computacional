import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcerdaDeComponent } from '../dialog-acerda-de/dialog-acerda-de.component';
import { DialogComoUsarComponent } from '../dialog-como-usar/dialog-como-usar.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
  }

  
  openDialog(component: ComponentType<unknown>): void{
    const dialogRef = this.dialog.open( component, {
      width: '600px',
      data: {}
    });
  }

  openAcerca(){
    this.openDialog(DialogAcerdaDeComponent);
  }

  openComo(){
    this.openDialog(DialogComoUsarComponent);
  }
}
