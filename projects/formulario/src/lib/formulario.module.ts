import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario.component';
import { UIRouterModule } from '@uirouter/angular';
import { STATES } from './formulario.states';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerModule } from './datepicker/datepicker.module';


@NgModule({
  declarations: [FormularioComponent],
  imports: [
    UIRouterModule.forChild({ states: STATES }),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    DatepickerModule
  ],
  exports: []
})
export class FormularioModule { }
