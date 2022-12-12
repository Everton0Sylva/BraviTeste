using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.Entity
{
  public class Pessoa
  {
    [Key]
    public int PessoaId { get; set; }
    [StringLength(256)]
    public string Nome { get; set; }

    public virtual ICollection<Contato> ListContato { get; set; }
  }
}
