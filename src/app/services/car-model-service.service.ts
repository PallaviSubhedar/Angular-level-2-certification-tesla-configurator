import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Color } from '../interfaces/color';
import { Model } from '../interfaces/modal';


@Injectable({
  providedIn: 'root'
})
export class CarModelServiceService {

  carModels: Model[] = [];
  modelCode$ = new BehaviorSubject('');
  colorCode = '';
  Model: any;
  // colors: any;
  


  constructor(public http: HttpClient) { 

  http.get<Model[]>('/models').subscribe(
    models => {this.carModels = models},
    err=>{console.log(err)}
    
  )


  this.modelCode$.subscribe(
    (modelCode: string) => {
      if (modelCode)
        this.colorCode = this.colors[0].code;
    }
  );
}


get carModel(): Model {
  const modelCode = this.modelCode$.value;
  const model = this.carModels.find(model => model.code === modelCode);

  if (model) return model;
  throw Error(`Tesla model ${modelCode} not found`);
}


get color(): Color {
  const color = this.colors.find((color: { code: string; }) => color.code === this.colorCode);

  if (color) return color;
  throw Error(`Color ${this.colorCode} not found`);
}



get colors(): Color[] {
  return this.carModel.colors;
}



ngOnInit(){
  console.log(this.carModels.values)
}
  
}
