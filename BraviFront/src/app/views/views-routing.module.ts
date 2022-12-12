import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exer1Component } from './exer1/exer1.component';
import { PessoaSaveComponent } from './exer3/pessoa-save/pessoa-save.component';
import { PessoalistComponent } from './exer3/pessoalist/pessoalist.component';
import { ViewsComponent } from './views.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ViewsComponent,
        pathMatch: 'full',
      },
      {
        path: 'exer1',
        component: Exer1Component,
      },
      {
        path: 'exer3',
        children: [
          {
            path: 'pessoas',
            component: PessoalistComponent,
          },
          {
            path: 'pessoa',
            component: PessoaSaveComponent,
          },
          {
            path: 'pessoa/:id',
            component: PessoaSaveComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
