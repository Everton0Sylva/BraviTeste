using Exer2API.BLL.Interface;
using Exer2API.Context;
using Exer2API.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exer2API.BLL
{
  public class PessoaBLL : IPessoa
  {
    private readonly AppBDContext _dbcontext;

    public PessoaBLL(AppBDContext dbcontext)
    {
      _dbcontext = dbcontext;
    }
    public void Insert(Pessoa pessoa)
    {
      _dbcontext.Add<Pessoa>(pessoa);
      _dbcontext.SaveChanges();
    }

    public ICollection<Pessoa> Select(Pessoa pessoa = null)
    {
      if (pessoa == null) return _dbcontext.Pessoa.Include(w => w.ListContato).ToList();
      else
      {
        return _dbcontext.Pessoa.Include(w => w.ListContato).Where(f => f.PessoaId == pessoa.PessoaId).ToList();
      }

    }

    public void Update(Pessoa pessoa)
    {
      _dbcontext.Pessoa.Update(pessoa);
      _dbcontext.SaveChanges();
    }
    public void Delete(string id)
    {
      Pessoa pessoa = _dbcontext.Pessoa.Include(w => w.ListContato).Where(f => f.PessoaId == int.Parse(id)).ToList().FirstOrDefault();
      _dbcontext.Pessoa.Remove(pessoa);
      _dbcontext.SaveChanges();
    }
  }
}
