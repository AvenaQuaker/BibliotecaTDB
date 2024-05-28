using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class Prestamos
	{
		public int ID { get; set; }
		public string FechaPrestamo { get; set; }
		public string FechaDevolucion { get; set; }
		public int ID_Usuario { get; set; }
	}
}