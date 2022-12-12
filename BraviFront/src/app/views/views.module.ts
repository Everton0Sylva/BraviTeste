import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ComponentsModule } from '../components/components.module';
import { Exer1Component } from './exer1/exer1.component';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PessoalistComponent } from './exer3/pessoalist/pessoalist.component';
import { PessoaSaveComponent } from './exer3/pessoa-save/pessoa-save.component';



@NgModule({
  declarations: [
    ViewsComponent,
    Exer1Component,
    PessoalistComponent,
    PessoaSaveComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ComponentsModule,
    NgxDatatableModule
  ],
  exports: [
    ViewsComponent,
    Exer1Component,
    PessoalistComponent,
    PessoaSaveComponent,
    
  ],
  providers: [
    RequestService
  ]
})
export class ViewsModule { }
