import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin2dec',
  templateUrl: './bin2dec.component.html',
  styleUrls: ['./bin2dec.component.css']
})
export class Bin2decComponent implements OnInit {
  binValue = '0';
  incorretobin=false;

  constructor() { }

  ngOnInit(): void {
  }

  valorMudouBin(valor: string):any{
    for(var indice=0;indice<valor.length;indice++){
      if(valor[indice] !in ['0','1']){
        this.incorretobin=true;
      }else{
        this.incorretobin=false;
      }
    }
    var valorConvertido = parseInt(valor,2);
    if(valorConvertido > 0){
      return valorConvertido;
    }else{
      return 0;
    }
  }
}
