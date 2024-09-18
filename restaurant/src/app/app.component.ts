import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SellComponent } from "./sell/sell.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryComponent } from "./delivery/delivery.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SellComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant';

}
