import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from './services/alert.service';
import { CarModelServiceService } from './services/car-model-service.service';
import { CarconfigserviceService } from './services/carconfigservice.service';
import { ViewcarmodelComponent } from './viewcarmodel/viewcarmodel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,RouterModule,ViewcarmodelComponent, CommonModule,
    RouterModule,
    MatTabsModule,],
  providers: [
    HttpClientModule
  ],
  templateUrl:'./app.component.html',             
  styleUrl:'./app.component.scss'
})
export class AppComponent {

  constructor(private router:Router,private carmodelservice:CarModelServiceService,carconfig:CarconfigserviceService,private alertservice:AlertService){}

  secondButtonEnabled: boolean = false;
  thirdButtonEnabled: boolean = false;
  
  getstep1(){
    this.router.navigate(['/select-model']);
    console.log('router selected');
    this.secondButtonEnabled = true;
    this.thirdButtonEnabled = true;
  }


  getstep2(){
    this.router.navigate(['/config-car']);
    console.log('router selected')
    
  }

  
  getstep3(){
    this.router.navigate(['/tesla-sum']);
    console.log('router selected')
  }


  ngOnInit() {
    // Show alert without any event
    this.alertservice.showAlert('Please Click on Step1 Button to enable Step2 and Step3');
  }
}
