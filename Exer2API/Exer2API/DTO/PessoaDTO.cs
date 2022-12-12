using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.DTO
{
  public class PessoaDTO
  {
    public string Nome { get; set; }
    public ICollection<ContatoDTO> ListContato { get; set; }
  }
}
