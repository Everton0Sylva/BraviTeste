using Exer2API.Entity;
using System;
using System.Collections.Generic;

namespace Exer2API.BLL.Interface
{
  public interface IContato
  {
    void Insert(Contato contato);
    void Update(Contato contato);
    void Delete(string id);
    ICollection<Contato> Select(Contato contato = null);
  }
}
