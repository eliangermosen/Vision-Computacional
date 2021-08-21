import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EstadosService } from 'src/app/servicio/estados.service';

@Component({
  selector: 'app-dialog-identificar',
  templateUrl: './dialog-identificar.component.html',
  styleUrls: ['./dialog-identificar.component.scss']
})
export class DialogIdentificarComponent implements OnInit {
  
  estado: string = 'Iniciando...'
  constructor(
    private estadoEvento: EstadosService,
    public dialogRef: MatDialogRef<DialogIdentificarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {}) 
    
    {}

  ngOnInit(): void {
    this.getEsetado();
  }
  getEsetado() {
   this.estadoEvento.cambiosEvento.subscribe( value => {
     this.estado = value.mesage;
     if(value.terminado)
      this.dialogRef.close();
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
