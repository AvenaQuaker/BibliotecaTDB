using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class Usuarios
	{
		public int ID { get; set; }
		public string Password { get; set; }
		public int ID_Rol { get; set; }
		public string Nombre { get; set; }
		public string ApellidoP { get; set; }
		public string ApellidoM { get; set; }
		public long Telefono { get; set; }
		public string Direccion { get; set; }
		public string Usuario { get; set; } 
	}

}