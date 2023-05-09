import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  calValue: string = '0';
  funcType: string = 'No function';
  isPressed: boolean = false;

  onClickDigit(val: any){

    if(val === '.'){
      this.isPressed = true;
    }
    this.calValue += val;
  }

  onClickFunction(func: string){
    this.isPressed = false;
    this.funcType = func;
  }

  onClickReset(){
    this.calValue = '0';
  }
}
