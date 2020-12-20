import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePickerInput } from './datepicker/datepicker.interface';


@Component({
  selector: 'lib-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {
  
  public datepickerConfig: DatePickerInput;

  @Input() form: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.form = fb.group({  
      'claveInternet' : [null, Validators.required]
    });  
    this.datepickerConfig = {
      label: 'Filtrar por fecha'
    };
  }

  ngOnInit(): void {
  }

}
