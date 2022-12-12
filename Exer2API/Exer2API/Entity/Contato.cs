using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.Entity
{
  public class Contato
  {
    [Key]
    public int ContatoId { get; set; }

    [StringLength(1)]
    public string Tipo { get; set; }

    [StringLength(256)]
    public string Valor { get; set; }
    public int? PessoaId { get; set; }
    [ForeignKey("PessoaId")]
    public virtual Pessoa Pessoa { get; set; }
  }
}
