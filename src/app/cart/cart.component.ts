import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
