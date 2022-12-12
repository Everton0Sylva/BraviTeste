using Exer2API.BLL.Interface;
using Exer2API.Context;
using Exer2API.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exer2API.BLL
{
  public class ContatoBLL : IContato
  {
    private readonly AppBDContext _dbcontext;

    public ContatoBLL(AppBDContext dbcontext)
    {
      _dbcontext = dbcontext;
    }
    public void Insert(Contato contato)
    {
      _dbcontext.Add<Contato>(contato);
      _dbcontext.SaveChanges();
    }

    public ICollection<Contato> Select(Contato contato = null)
    {
      if (contato == null) return _dbcontext.Contato.ToList();
      else
      {
        return _dbcontext.Contato.Where(f => f.ContatoId == contato.ContatoId).ToList();
      }
    }

    public void Update(Contato contato)
    {
      _dbcontext.Contato.Update(contato);
      _dbcontext.SaveChanges();
    }
    public void Delete(string id)
    {
      Contato contato = _dbcontext.Contato.Where(f => f.ContatoId == int.Parse(id)).ToList().FirstOrDefault();
      _dbcontext.Contato.Remove(contato);
      _dbcontext.SaveChanges();
    }
  }
}
