import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Color } from '../interfaces/color';
import { Model } from '../interfaces/modal';
import { CarModelServiceService } from '../services/car-model-service.service';

@Component({
  selector: 'app-car-model-selector',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule,CommonModule,
    FormsModule],
    providers: [
      HttpClientModule
    ],
  templateUrl: './car-model-selector.component.html',
  styleUrl: './car-model-selector.component.scss'
})
export class CarModelSelectorComponent {
  carModels: Model[] = [];
  #modelCode: string=""
  
constructor(private carmodelservice:CarModelServiceService){
 
 
}

get models(): Model[]{
  return this.carmodelservice.carModels
  
}
get modelCode(): string {
  return this.#modelCode;
}

set modelCode(value: string) {
  this.#modelCode = value;
  this.carmodelservice.modelCode$.next(value);
}

get colors(): Color[] {
  return this.carmodelservice.colors;
}

get colorCode(): string {
  return this.carmodelservice.colorCode;
}

set colorCode(value: string) {
  this.carmodelservice.colorCode = value;
}

ngOnInit(){
  this.#modelCode = this.carmodelservice.modelCode$.value;
  console.log(this.#modelCode)
}

}
