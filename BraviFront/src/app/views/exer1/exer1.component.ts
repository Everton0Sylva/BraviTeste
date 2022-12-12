import { Component } from '@angular/core';

@Component({
  selector: 'app-exer1',
  templateUrl: './exer1.component.html',
  styleUrls: ['./exer1.component.css']
})
export class Exer1Component {

  public isValid: any = null;

  public validacoes = ["(){}[]", "[{()}](){}"];
  public sColchetes: string = "";

  constructor() {
  }

  onFocus(){
    this.isValid = null;
  }

  onValidar() {
    this.validacoes.forEach(elem => {
      if (this.sColchetes.indexOf(elem) >= 0) {
        this.isValid = true;
      } else if (this.isValid != true) {
        this.isValid = false;
      }
    });
  }
}
