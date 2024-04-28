import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarModelServiceService } from '../services/car-model-service.service';

@Component({
  selector: 'app-viewcarmodel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcarmodel.component.html',
  styleUrl: './viewcarmodel.component.scss'
})
export class ViewcarmodelComponent {
  
 readonly ENDPOINT = 'https://interstate21.com/tesla-app/images';
constructor(private cardmodelsevice:CarModelServiceService){}


getcarurl(modelCode: string, colorCode: string): string {
  return `${this.ENDPOINT}/${modelCode}/${colorCode}.jpg`;
}

get isModelSelected(): boolean {
  return this.modelCode !== '';
}

get src(): string {
  return this.getcarurl(this.modelCode, this.colorCode);
}


get modelCode(): string {
  return this.cardmodelsevice.modelCode$.value;
}

get colorCode(): string {
  return this.cardmodelsevice.colorCode;
}
}
