import { eTipo } from "./eTipo";

export class Contato {
    ContatoId : number;
    Tipo : eTipo;
    Valor: string;

    fromData(data: any){
        this.ContatoId = data.contatoId;
        this.Tipo = data.tipo;
        this.Valor = data.valor;
    }
}