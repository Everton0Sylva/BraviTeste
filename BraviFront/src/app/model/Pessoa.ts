import { Contato } from "./Contato";

export class Pessoa {
    PessoaId: number;
    Nome: string;
    ListContato: Array<Contato>

    fromData(data: any) {
        this.PessoaId = data.pessoaId;
        this.Nome = data.nome;
    }
}