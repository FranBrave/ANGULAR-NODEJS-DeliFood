import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input()
  control!: AbstractControl;
  @Input()
  showErrorsWhen: boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';

  get formControl(){
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
