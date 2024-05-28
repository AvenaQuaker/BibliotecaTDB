using Login.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Login.Controllers
{
	public class HomeController : Controller
	{
		private readonly string connectionString = "data source=JAIMEA\\SQLEXPRESS; database=BibliotecaTDB; integrated security = SSPI;";

		// GET: Usuario
		[HttpGet]
		public ActionResult Index()
		{
			ViewBag.Message = TempData["Usuario"];
			return View("Usuario");
		}

		// Regresa las Imagenes del TOP 4 Libros diferentes de la biblioteca
		[HttpGet]
		public JsonResult ObtenerImagenes()
		{
			List<Libro> libro = new List<Libro>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ObtenerImagenes";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libro.Add(new Libro
							{
								URL = lector["ImgURL"].ToString(),
							});
						}
					}
				}
			}
			return Json(libro, JsonRequestBehavior.AllowGet);
		}

		// Regresa los Libros basicos
		[HttpGet]
		public JsonResult ObtenerLibros()
		{
			List<LibrosHome> libros = new List<LibrosHome>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "CantidadDisponible";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libros.Add(new LibrosHome
							{
								ISBN = lector["ISBN"].ToString(),
								Titulo = lector["Titulo"].ToString(),
								Autor = lector["Autor"].ToString(),
								CantidadLibros = int.Parse(lector["CantidadLibros"].ToString()),
								CantidadDisponible = int.Parse(lector["CantidadDisponible"].ToString()),
							});
						}
					}
				}
			}
			return Json(libros, JsonRequestBehavior.AllowGet);
		}


		//Regresa los datos del Libro elegido
		[HttpGet]
		public JsonResult ObtenerLibro(string ISBN)
		{
			LibroHome libro = new LibroHome();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ObtenerLibro";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", ISBN);
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libro.ISBN = lector["ISBN"].ToString();
							libro.Titulo = lector["Titulo"].ToString();
							libro.AñoPublicacion = lector["AñoPublicacion"].ToString();
							libro.Autor = lector["NombreCompleto"].ToString();
							libro.Editorial = lector["NombreEditorial"].ToString();
							libro.URL = lector["ImgURL"].ToString();
						}
					}
				}
			}
			return Json(libro, JsonRequestBehavior.AllowGet);
		}

		// Transaccion del Prestamo
		[HttpPost]
		public JsonResult PrestarLibro(string isbn, int idUsuario, string fechaDevolucion)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "PrestarLibro";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", isbn);
					comando.Parameters.AddWithValue("@ID_Usuario", idUsuario);
					comando.Parameters.AddWithValue("@FechaDevolucion", fechaDevolucion);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Libro prestado exitosamente";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}
			return Json(new { Message = message });
		}
	}
}