import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Config } from '../interfaces/carconfig';
import { Color } from '../interfaces/color';
import { CarModelServiceService } from '../services/car-model-service.service';
import { CarconfigserviceService } from '../services/carconfigservice.service';
@Component({
  selector: 'app-teslasum',
  standalone: true,
  imports: [ CommonModule,
    CurrencyPipe],
  templateUrl: './teslasum.component.html',
  styleUrl: './teslasum.component.scss'
})
export class TeslasumComponent {
  readonly OPTION_PRICE = 1000;
  modelDescription: string;
  config: Config;
  color: Color;
  towHitch: boolean;
  yoke: boolean;
  
constructor(public carmodelservice:CarModelServiceService ,optionservice:CarconfigserviceService){
  this.modelDescription = carmodelservice.carModel.description;
  this.config = optionservice.config!;
  this.color = carmodelservice.color;
  this.towHitch = optionservice.towHitch;
  this.yoke = optionservice.yoke;
}

get totalCost(): number {
  let cost = this.config.price;

  cost += this.color.price;
  if (this.towHitch) cost += this.OPTION_PRICE;
  if (this.yoke) cost += this.OPTION_PRICE;

  return cost;
}
}   