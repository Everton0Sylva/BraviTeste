import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from './components/components.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    ComponentsModule,    
    NgxUiLoaderModule.forRoot({
      delay: 100,
      maxTime: 300000,
      blur: 7,
      fgsType: "three-strings",
      fgsSize: 40,
      fgsColor: "#c0c0c0",
      hasProgressBar: true,
      gap: 5,
      text: "Carregando",
      textColor: "#c0c0c0",
      textPosition: "center-center",
    }),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Sem Dados para listar!',
        totalMessage: 'Total',
        selectedMessage: ""
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
