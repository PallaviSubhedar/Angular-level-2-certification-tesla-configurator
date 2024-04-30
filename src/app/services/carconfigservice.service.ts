import { Injectable } from '@angular/core';
import { Config } from '../interfaces/carconfig';
import { CarModelServiceService } from './car-model-service.service';

@Injectable({
  providedIn: 'root'
})
export class CarconfigserviceService {
  configId = 0 ; 
  config : Config | null = null ;
  towHitch = false;
  yoke = false;
  

  constructor(carmodelservice:CarModelServiceService) { 
    
    carmodelservice.modelCode$.subscribe( _  => {
      this.configId = 0;
      this.config = null ;
      this.towHitch = false;
      this.yoke = false;
    });
  }
 
}
