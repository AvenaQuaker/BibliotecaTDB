using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class Libro
	{
		public string ISBN { get; set; }
		public string Titulo { get; set; }
		public string AñoPublicacion { get; set; }
		public int ID_Autor {  get; set; }
		public int ID_Editorial { get; set; }
		public string URL { get; set; }
	}
}