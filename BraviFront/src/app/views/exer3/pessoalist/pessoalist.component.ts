
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Contato } from 'src/app/model/Contato';
import { Pessoa } from 'src/app/model/Pessoa';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.css']
})
export class PessoalistComponent implements OnInit {
  public dtLoad: boolean = false;
  public listPessoas: Array<Pessoa>;
  public listPessoasFilter: Array<Pessoa>;

  @ViewChild('dtTable') dtTable: any;
  constructor(private requestService: RequestService, private ngxService: NgxUiLoaderService
    , private router: Router) {
  }


  ngOnInit() {
    this.onLoadDtTable();
  }

  onNewPessoa() {

  }

  toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  })

  onLoadDtTable() {
    this.listPessoas = [];
    this.dtLoad = false;
    let that = this;
    that.ngxService.start();
    this.requestService.GetPessoas().then((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        that.listPessoas = data.map((p: any) => {
          let pessoa = new Pessoa();
          pessoa.fromData(p);
          if (Array.isArray(p.listContato) && p.listContato.length > 0) {
            pessoa.ListContato = p.listContato?.map((c: any) => {
              let contato = new Contato();
              contato.fromData(c);
              return contato;
            });
          }
          return pessoa
        });
      }

      that.ngxService.stop();
      that.listPessoasFilter = that.listPessoas;
      that.dtLoad = true;
    }).catch((error) => {
      console.log(error);
    })
  }
  dtTableFilter(event: any) {
    let val = event.target.value
    if (val.length > 0) {
      val = val.toLowerCase().trim();
      if (val == null || val == undefined || val == "") {
        this.listPessoasFilter = this.listPessoas;
        return
      }
      this.listPessoasFilter = this.listPessoas.filter(pessoa => {
        return pessoa.Nome.indexOf(val) >= 0 ? pessoa : false
      })
    }
  }

  onEditPessoa(row: Pessoa) {
    this.router.navigate(['/exer3/pessoa', row.PessoaId]);
  }

  onDeletePessoa(row: Pessoa) {
    let that = this;
    Swal.fire({
      icon: 'question',
      title: 'Confirma Exclusão?',
      text: 'Deseja realmente Excluir ' + row.Nome + "?",
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn btn-outline-danger ms-3',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        that.requestService.DelPessoas(row.PessoaId.toString())
          .then((data: any) => {
            that.ngxService.stop();
            that.toast.fire({
              text: 'Excluido com Sucesso!',
              icon: 'success'
            });
            that.onLoadDtTable();
          }).catch((error) => {
            that.ngxService.stop();
            console.log(error);
            this.toast.fire({
              text: 'Um erro ocorreu!',
              icon: 'error'
            });
          })
      }
    })
  }
}
