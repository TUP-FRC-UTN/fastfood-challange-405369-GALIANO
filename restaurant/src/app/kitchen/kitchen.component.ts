import { Component } from '@angular/core';
import { PedidosService } from '../../pedidos.service';
import {estado, pedido} from '../../data/interfaces'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  listaPedidos: pedido[] = [];
  estados = estado;
  constructor  (private pedidoService: PedidosService){
      this.listaPedidos = this.pedidoService.listaPedidos;
  }

  cocinarPedido(pedido: pedido){
    this.pedidoService.changeState(pedido, estado.COCINANDO);
  }

  terminarPedido(pedido: pedido){
    this.pedidoService.changeState(pedido, estado.TERMINADO);
    alert("El pedido " + pedido.number + " fue terminado.");
  }

}
