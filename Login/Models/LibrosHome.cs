using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class LibrosHome
	{
		public string ISBN { get; set; }
		public string Titulo { get; set; }
		public string Autor {  get; set; }
		public string FechaPublicacion { get; set; }
		public string Editorial { get; set; }
		public int CantidadLibros { get; set; }
		public int CantidadDisponible {  get; set; }
	}
}