import { Component, OnInit } from '@angular/core';
import { CalculadoraServiceService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css','../app.component.css','../bin2dec/bin2dec.component.css']
})
export class CalculadoraComponent implements OnInit {
  private numero1: string   = '0';
  private numero2: string   = '0';
  private resultado: number = 0;
  private operacao: string  = '';
  constructor(private CalculadoraServiceService: CalculadoraServiceService) { }

  ngOnInit(): void {
  }

  limpar():void{
    this.numero1   = '0';
    this.numero2   = '0';
    this.operacao  = '';
    this.resultado = 0;
  }

  clicouMemoria():void{
    localStorage.setItem("calculadora", this.numero1);
  }

  getMemoria(): void{
    let num = localStorage.getItem("calculadora");
    if(num !== null){
      if(this.operacao !== ''){
        this.numero2 = num;
      } else {
        this.numero1 = num;
      }
    }
  }

  clicouClearAll(): void{
    localStorage.setItem("calculadora", '0');
    this.limpar();
  }

  adicionaNumero(num: string){
    if(this.operacao == ''){
      this.numero1 = this.concatenarNumero(this.numero1, num);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, num);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string):string{
    if(numAtual == '0'){
      numAtual='';
    }
    if((numConcat === ',' || numConcat === '.') && numAtual === ''){
      return '0.';
    }
    if((numConcat === '.' || numConcat === ',') && numAtual.indexOf('.') > -1){
      return numAtual;
    }
    return numAtual+numConcat;
  }

  definirOperacao(operacao: string): void{
    if(this.operacao ===  ''){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== '0'){
      this.resultado = this.CalculadoraServiceService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = "0";
      this.resultado = 0;
    }
  }

  calcular():void{
    if(this.numero2 === '0'){
      return;
    }

    this.resultado = this.CalculadoraServiceService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  get display():string{
    if(this.resultado !== 0){
      return this.resultado.toString();
    }
    if(this.numero2 !== '0'){
      return this.numero2;
    }
    return this.numero1;
  }
}