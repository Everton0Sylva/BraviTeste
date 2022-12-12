import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private http: HttpClient, private router: Router,) { }

  public GetPessoas(param: any = null) {
    return new Promise((resolve, reject) => {
      let url = environment.url + "/api/pessoa";
      this.http.get(url, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }


  public PostPessoas(pessoa: Pessoa) {
    return new Promise((resolve, reject) => {
      let url = environment.url + "/api/pessoa";
      this.http.post(url, pessoa, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }

  public GetPessoa(pessoaId: string) {
    return new Promise((resolve, reject) => {
      let url = environment.url + "/api/pessoa/" + pessoaId;
      this.http.get(url, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }


  public PutPessoas(pessoa: Pessoa) {
    return new Promise((resolve, reject) => {
      let url = environment.url + "/api/pessoa";
      this.http.put(url, pessoa, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }

  
  public DelPessoas(pessoaId: string) {
    return new Promise((resolve, reject) => {
      let url = environment.url + "/api/pessoa/" + pessoaId;
      this.http.delete(url, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }
}
