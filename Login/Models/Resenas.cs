using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class Resenas
	{
		public int ID { get; set; }
		public string Comentario { get; set; }
		public int Puntuacion { get; set; }
		public int ID_Usuario { get; set; }
		public int ID_Libro { get; set; }
	}
}