import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bin2decComponent } from 'src/app/bin2dec/bin2dec.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {path:'bin2dec',component:Bin2decComponent},
  {path:'calculadora', component:CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
