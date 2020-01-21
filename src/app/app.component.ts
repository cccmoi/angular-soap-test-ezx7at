import { Component } from '@angular/core';
import { SoapService } from './soap.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'SOAP Prototype';
  jsonData: any;
  xmlData: any;
  ObjectKeys: any = Object.keys;

  constructor(private soapService: SoapService)
  {
    this.soapService.getJsonData().subscribe((data) => {
      console.warn('Json data received:', data);
      this.jsonData = data;
    },
    (err) => {
      console.warn('Erroneous! Err:', err);
    });

    this.soapService.getSoapData().subscribe((data) => {
      console.warn('SOAP data received:', data);
      this.xmlData = data;
    },
    (err) => {
      console.warn('Erroneous! Err:', err);
    });
  }
}
