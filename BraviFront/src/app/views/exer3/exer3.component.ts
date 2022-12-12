import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Contato } from 'src/app/model/Contato';
import { Pessoa } from 'src/app/model/Pessoa';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-exer3',
  templateUrl: './exer3.component.html',
  styleUrls: ['./exer3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Exer3Component implements OnInit {
  public dtLoad: boolean = false;
  public listPessoas: Array<Pessoa>;
  public listPessoasFilter: Array<Pessoa>;

  @ViewChild('dtTable') dtTable: any;
  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.onLoadDtTable();
  }

  onNewPessoa() {

  }

  onLoadDtTable() {
    this.listPessoas = [];
    this.dtLoad = false;
    let that = this;
    this.requestService.GetPessoas().then((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        that.listPessoas = data.map((p: any) => {
          let pessoa = new Pessoa();
          pessoa.fromData(p);
          if (Array.isArray(p.listContato) && p.listContato.length > 0) {
            pessoa.ListContatos = p.listContato?.map((c: any) => {
              let contato = new Contato();
              contato.fromData(c);
              return contato;
            });
          }
          return pessoa
        });
      }

      that.listPessoasFilter = that.listPessoas;
      that.dtLoad = true;
    }).catch((error) => {
      console.log(error);
    })
  }
  dtTableFilter(event: any) {
    const val = event.target.value.toLowerCase().trim();
    if (val == null || val == undefined || val == "") {
      this.listPessoasFilter = this.listPessoas;
      return
    }
    this.dtLoad = false;
    this.listPessoasFilter = this.listPessoas.filter(pessoa => {
      return pessoa.Nome.indexOf(val) >= 0 ? pessoa : false
    })
  }
}
