using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Login.Models
{
	public class Ubicaciones
	{
		public int ID { get; set; }
		public string Seccion {  get; set; }
		public int Nivel { get; set; }
		public int Estante {  get; set; }
	}
}