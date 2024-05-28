using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class LibroHome
	{
		public string ISBN { get; set; }
		public string Titulo { get; set; }
		public string AñoPublicacion { get; set; }
		public string Autor { get; set; }
		public string Editorial { get; set; }
		public string URL { get; set; }
	}
}