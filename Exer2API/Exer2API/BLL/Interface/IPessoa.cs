using Exer2API.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.BLL.Interface
{
  public interface IPessoa
  {
    void Insert(Pessoa pessoa);
    void Update(Pessoa pessoa);
    void Delete(string id);
    ICollection<Pessoa> Select(Pessoa pessoa = null);
  }
}
