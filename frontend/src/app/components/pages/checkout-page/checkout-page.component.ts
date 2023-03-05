import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  order: Order = new Order();
  checkOutForm!: FormGroup;

  constructor( cartService: CartService,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private toastrService: ToastrService ) {
                  const cart = cartService.getCart();
                  this.order.items = cart.items;
                  this.order.totalPrice = cart.totalPrice;
                 }


  ngOnInit(): void {
    let { name, address } = this.userService.currentUser;
    this.checkOutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
  });
}

get fc() {
  return this.checkOutForm.controls;
}

createOrder() {
  if(this.checkOutForm.invalid) {
    this.toastrService.warning('Por favor, rellena todos los campos', 'Algún campo es incorrecto');
    return;
  };

  this.order.name = this.fc.name.value;
  this.order.address = this.fc.address.value;

  console.log(this.order);

}

}
