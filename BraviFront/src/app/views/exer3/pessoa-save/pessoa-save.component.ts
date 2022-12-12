import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Contato } from 'src/app/model/Contato';
import { eTipo } from 'src/app/model/eTipo';
import { Pessoa } from 'src/app/model/Pessoa';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-save',
  templateUrl: './pessoa-save.component.html',
  styleUrls: ['./pessoa-save.component.css']
})
export class PessoaSaveComponent implements OnInit {

  public pessoaId: string = null;
  public nPessoa: Pessoa;
  public nContato: Contato;
  public listTipo: any = []


  public listContato: Array<Contato>;
  public listContatoFilter: Array<Contato>;
  public dtLoad: boolean = false;

  public isNewContato: boolean = false

  eTipo = eTipo;
  constructor(private requestService: RequestService, private ngxService: NgxUiLoaderService
    , private route: ActivatedRoute, private router: Router) {
    this.nPessoa = new Pessoa();
  }
  toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  })

  ngOnInit() {
    let that = this;
    this.route.params.subscribe((params: any) => {
      if (params.id !== undefined && params.id !== null) {
        that.pessoaId = params.id;
        that.requestService.GetPessoa(this.pessoaId).then((data: any) => {
          let pessoa = new Pessoa();
          pessoa.fromData(data);
          if (Array.isArray(data.listContato) && data.listContato.length > 0) {
            pessoa.ListContato = data.listContato?.map((c: any) => {
              let contato = new Contato();
              contato.fromData(c);
              return contato;
            });

            that.listContato = [...pessoa.ListContato];
            that.onLoadDtTable();
            that.dtLoad = true;
          }
          that.nPessoa = pessoa;
        });
      }
    });

    this.isNewContato = false;
    this.listContatoFilter = this.listContato = [];

    let keys = Object.keys(this.eTipo);
    keys.forEach((k: any, i: number) => {
      this.listTipo.push({ name: k, value: i })
    })
    //  console.log(this.listTipo);
  }

  onNewContato() {
    this.isNewContato = true;
    this.nContato = new Contato();
  }

  onCancelNewContato() {
    this.isNewContato = false;
  }

  onSave() {
    if (this.listContato.length > 0) {
      this.nPessoa.ListContato = [...this.listContato];
    }
    let that = this;
    this.ngxService.start();
    if (this.pessoaId == null) {
      this.requestService.PostPessoas(this.nPessoa)
        .then((data: any) => {
          that.ngxService.stop();
          this.router.navigate(['/exer3/pessoas']);

          this.toast.fire({
            text: 'Salvo com Sucesso!',
            icon: 'success'
          });
        }).catch((error) => {
          that.ngxService.stop();
          console.log(error);
          this.toast.fire({
            text: 'Um erro ocorreu!',
            icon: 'error'
          });
        })
    } else {
      this.requestService.PutPessoas(this.nPessoa)
        .then((data: any) => {
          that.ngxService.stop();
          this.router.navigate(['/exer3/pessoas']);

          this.toast.fire({
            text: 'Alterado com Sucesso!',
            icon: 'success'
          });
        }).catch((error) => {
          that.ngxService.stop();
          console.log(error);
          this.toast.fire({
            text: 'Um erro ocorreu!',
            icon: 'error'
          });
        })
    }
  }
  onIncludeNewContato() {
    if (this.nContato != undefined) {
      this.listContato.push(this.nContato);
    }
    this.onLoadDtTable();
    this.onCancelNewContato();
  }

  onLoadDtTable() {
    this.dtLoad = false;
    if (this.listContato.length > 0) {
      this.listContatoFilter = [...this.listContato];
      this.dtLoad = true;
    }
  }

  onRemoveContato(row: Contato) {
    if (row.ContatoId != undefined && row.ContatoId != null &&
      row.ContatoId > 0) {
      let that = this;
      Swal.fire({
        icon: 'question',
        title: 'Confirma Exclusão?',
        text: 'Deseja realmente Apagar o Contato ' + this.listTipo[row.Tipo].name + "?",
        footer: '*O Contato Salvo será pagado!',
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
          that.requestService.DelContato(row.ContatoId.toString())
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
    let idx = this.listContato.findIndex((f: any) => {
      return f == row
    });
    if (idx >= 0) this.listContato.splice(idx, 1);

    this.onLoadDtTable();
  }
}
