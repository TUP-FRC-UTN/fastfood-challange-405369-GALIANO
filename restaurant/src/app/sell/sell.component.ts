import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { PedidosService } from '../../pedidos.service';
import {estado, pedido} from '../../data/interfaces'

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {
  nom: string |undefined;
  ped: string | undefined;

  constructor(private pedidoService: PedidosService){

  }

sendOrder(form: NgForm){
if (!form.valid){
  alert("Verifique errores en el formulario");
  return;
}else{
  if(this.nom != undefined && this.ped != undefined){
    const nuevoPedido: pedido = {
    number: Math.floor(Math.random()*1000),
    name: this.nom,
    description: this.ped,
    date: new Date,
    state: estado.PENDIENTE
   }
   this.pedidoService.listaPedidos.push(nuevoPedido);
   alert("El pedido fue cargado");
   this.nom = undefined;
   this.ped = undefined;
  }
  
} 
}
}
