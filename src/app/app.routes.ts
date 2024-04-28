import { Component, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarModelSelectorComponent } from './car-model-selector/car-model-selector.component';
import { CarconfigComponent } from './carconfig/carconfig.component';
import { CarModelServiceService } from './services/car-model-service.service';
import { CarconfigserviceService } from './services/carconfigservice.service';
import { TeslasumComponent } from './teslasum/teslasum.component';

import { ViewcarmodelComponent } from './viewcarmodel/viewcarmodel.component';


export const routes: Routes = [
    {
      path:'',redirectTo:'select-model',pathMatch:'full'
    },
    {
        path:'select-model',component:CarModelSelectorComponent
    },
    {
      path:'select-model',component:ViewcarmodelComponent
    },
    {
        path:'config-car',component:CarconfigComponent,
        canActivate: [() => inject(CarModelServiceService).modelCode$.value.length > 0]
     },
    {
        path:'tesla-sum',component:TeslasumComponent,
        canActivate: [() => inject(CarconfigserviceService).configId > 0]
     },
    { 
    
      path: '**', redirectTo: 'select-model' 
    }
  
];


@Component({
    selector: 'my-app',
    standalone: true,
    imports: [RouterModule],
    template: `
      
      <router-outlet></router-outlet>
    `,
  })
  export class AppComponent {}