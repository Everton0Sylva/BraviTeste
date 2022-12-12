using AutoMapper;
using Exer2API.DTO;
using Exer2API.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.Mapping
{
  public class MapperProfile : Profile
  {
    public MapperProfile()
    {
      CreateMap<Pessoa, PessoaDTO>().ReverseMap();
      CreateMap<PessoaDTO, Pessoa>().ReverseMap();

      CreateMap<Contato, ContatoDTO>().ReverseMap();
      CreateMap<ContatoDTO, Contato>().ReverseMap();


    }
  }
}
