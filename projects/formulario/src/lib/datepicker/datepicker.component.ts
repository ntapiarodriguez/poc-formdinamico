import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatePickerInput } from './datepicker.interface';

@Component({
  selector: 'lib-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() datepickerInput: DatePickerInput;

  constructor() { }

  ngOnInit(): void {
  }

}
