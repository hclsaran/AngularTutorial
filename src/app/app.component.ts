import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saran-app';
  name:string='Welcome to Angular'
  //Property Binding
  isDisabled:boolean=false;

  //Event Binding
  fruits:string='';

     clearFruits(){
      this.fruits='';

     }
     getValue(event:Event){
       return (event.target as HTMLInputElement).value;

     }
}
