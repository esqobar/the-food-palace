import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css']
})
export class OrderItemsListComponent implements OnInit {

  @Input() order!: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
