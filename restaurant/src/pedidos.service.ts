import { Injectable } from '@angular/core';
import {estado, pedido} from './data/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

constructor() { }
listaPedidos: pedido[] = [];

changeState(pedido: pedido, estado: estado){
  pedido.state = estado;
}

}

