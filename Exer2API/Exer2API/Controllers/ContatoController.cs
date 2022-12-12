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
  public class ContatoController : ControllerBase
  {
    private readonly IMapper _mapper;
    private readonly IContato _Contato;
    public ContatoController(IMapper mapper, IContato iContato)
    {
      _mapper = mapper;
      _Contato = iContato;
    }

    [HttpPost]
    public ActionResult ContatoPost([FromBody] ContatoDTO contatoDTO)
    {
      try
      {
        Contato contato = _mapper.Map<Contato>(contatoDTO);
        _Contato.Insert(contato);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpGet("{id}")]
    public ActionResult ContatoGet(string id)
    {
      try
      {
        if (string.IsNullOrEmpty(id)) return BadRequest();

        Contato contato = new Contato()
        {
          ContatoId = int.Parse(id)
        };
        return Ok(_Contato.Select(contato).ToList().FirstOrDefault());
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpGet]
    public ActionResult ContatoGetAll()
    {
      try
      {
        List<Contato> listContato = _Contato.Select().ToList();
        return Ok(listContato);
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpPut]
    public ActionResult ContatoPut([FromBody] Contato contato)
    {
      try
      {
        if (contato.ContatoId == null || contato.ContatoId <= 0) return BadRequest();

        _Contato.Update(contato);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpDelete("{id}")]
    public ActionResult ContatoDel(string id)
    {
      try
      {
        if (id == null) return BadRequest();

        _Contato.Delete(id);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }
  }
}
