import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Config } from '../interfaces/carconfig';
import { Options } from '../interfaces/options';
import { CarModelServiceService } from '../services/car-model-service.service';
import { CarconfigserviceService } from '../services/carconfigservice.service';

@Component({
  selector: 'app-carconfig',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    CurrencyPipe,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,],
  templateUrl: './carconfig.component.html',
  styleUrl: './carconfig.component.scss'
})
export class CarconfigComponent {
  options?: Options;
  
  

  constructor( http:HttpClient,carmodelservice:CarModelServiceService,private optionservice:CarconfigserviceService){
    
    var url ='/Options/' +carmodelservice.modelCode$.value;
     
    http.get<Options>(url).subscribe(options => this.options = options);

  }
  get config(): Config {
    const config = this.options?.configs.find(
      config => config.id === this.configId
    );
  

    if (config) return config;
    throw Error(`Config ${this.configId} not found!`);
  }

 
  // ngModel writes the value as a string
  set configId(id: string) {
    this.optionservice.configId = parseInt(id);
    this.optionservice.config = this.config;
  }
  
  get configId(): any{
    return this.optionservice.configId;
  }

  get towHitch(): boolean {
    return this.optionservice.towHitch;
  }

  set towHitch(value: boolean) {
    this.optionservice.towHitch = value;
  }

  get yoke(): boolean {
    return this.optionservice.yoke;
  }

  set yoke(value: boolean) {
    this.optionservice.yoke = value;
  }
}
