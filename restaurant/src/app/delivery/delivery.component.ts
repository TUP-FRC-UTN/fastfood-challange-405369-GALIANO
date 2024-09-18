import { Component } from '@angular/core';
import { PedidosService } from '../../pedidos.service';
import {estado, pedido} from '../../data/interfaces'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  listaPedidos: pedido[] = [];
  estados = estado;
  constructor  (private pedidoService: PedidosService){
      this.listaPedidos = this.pedidoService.listaPedidos;
  }

  entregarPedido(pedido: pedido){
    this.pedidoService.changeState(pedido, estado.ENTREGADO);
    alert("El pedido de " + pedido.name + " fue entregado.");
  }

}
