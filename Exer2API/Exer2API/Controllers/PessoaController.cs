using AutoMapper;
using Exer2API.BLL.Interface;
using Exer2API.DTO;
using Exer2API.Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exer2API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class PessoaController : ControllerBase
  {
    private readonly IMapper _mapper;
    private readonly IPessoa _Pessoa;
    public PessoaController(IMapper mapper, IPessoa iPessoa)
    {
      _mapper = mapper;
      _Pessoa = iPessoa;
    }

    [HttpPost]
    public ActionResult PessoaPost([FromBody] PessoaDTO pessoaDTO)
    {
      try
      {
        Pessoa pessoa = _mapper.Map<Pessoa>(pessoaDTO);
        _Pessoa.Insert(pessoa);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpGet("{id}")]
    public ActionResult PessoaGet(string id)
    {
      try
      {
        if (string.IsNullOrEmpty(id)) return BadRequest();

        Pessoa pessoa = new Pessoa()
        {
          PessoaId = int.Parse(id)
        };
        return Ok(_Pessoa.Select(pessoa).ToList().FirstOrDefault());
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpGet]
    public ActionResult PessoaGetAll()
    {
      try
      {
        List<Pessoa> listPessoa = _Pessoa.Select().ToList();
        return Ok(listPessoa);
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpPut]
    public ActionResult PessoaPut([FromBody] Pessoa pessoa)
    {
      try
      {
        if (pessoa.PessoaId == null || pessoa.PessoaId <= 0) return BadRequest();

        _Pessoa.Update(pessoa);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpDelete("{id}")]
    public ActionResult PessoaDel(string id)
    {
      try
      {
        if (id == null) return BadRequest();

        _Pessoa.Delete(id);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }
  }
}
