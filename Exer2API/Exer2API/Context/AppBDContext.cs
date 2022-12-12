using Exer2API.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.Context
{
  public class AppBDContext: DbContext
  {
    public AppBDContext(DbContextOptions<AppBDContext> options)
        : base(options) { }

    public DbSet<Pessoa> Pessoa { get; set; }
    public DbSet<Contato> Contato { get; set; }
  }
}
