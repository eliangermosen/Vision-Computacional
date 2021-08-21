import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  public cambiosEvento: EventEmitter<{mesage: string, terminado: boolean}> = new EventEmitter<{mesage: string, terminado: boolean}>();
  constructor() { }
}
