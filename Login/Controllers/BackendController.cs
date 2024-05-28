using Login.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Security.Principal;
using System.Data;

namespace Login.Controllers
{
	public class BackendController : Controller
	{
		private string connectionString = "data source=JAIMEA\\SQLEXPRESS; database=BibliotecaTDB; integrated security = SSPI;";

		// GET: Backend
		[HttpGet]
		public ActionResult Admin()
		{
			return View("Admin");
		}

		[HttpGet]
		public ActionResult Mod()
		{
			return View("Mod");
		}

		[HttpGet]
		public JsonResult GETAutores()
		{
			List<Autores> autores = new List<Autores>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeAutores";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							autores.Add(new Autores
							{
								ID = int.Parse(lector["IdAutor"].ToString()),
								Nombre = lector["Nombre"].ToString(),
								Apellido1 = lector["ApellidoP"].ToString(),
								Apellido2 = lector["ApellidoM"].ToString()
							});
						}
					}
				}
			}
			return Json(autores, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETCategorias()
		{
			List<Categorias> categorias = new List<Categorias>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeCategorias";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							categorias.Add(new Categorias
							{
								ID = int.Parse(lector["idCategoria"].ToString()),
								Nombre = lector["Nombre"].ToString(),
							});
						}
					}
				}
			}
			return Json(categorias, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETEditoriales()
		{
			List<Editoriales> editoriales = new List<Editoriales>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeEditoriales";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							editoriales.Add(new Editoriales
							{
								ID = int.Parse(lector["idEditorial"].ToString()),
								Nombre = lector["NombreEditorial"].ToString(),
								Direccion = lector["Direccion"].ToString(),
								Telefono = int.Parse(lector["Telefono"].ToString())
							});
						}
					}
				}
			}
			return Json(editoriales, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETLibros()
		{
			List<Libros> libros = new List<Libros>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeLibros";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libros.Add(new Libros
							{
								ID = int.Parse(lector["idLibro"].ToString()),
								ID_Prestamo = int.Parse(lector["idPrestamo"].ToString()),
								ISBN = lector["ISBN"].ToString()
							});
						}
					}
				}
			}
			return Json(libros, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETLibro()
		{
			List<Libro> libro = new List<Libro>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeLibro";
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
								ISBN = lector["ISBN"].ToString(),
								Titulo = lector["Titulo"].ToString(),
								AñoPublicacion = lector["AñoPublicacion"].ToString(),
								ID_Autor = int.Parse(lector["idAutor"].ToString()),
								ID_Editorial = int.Parse(lector["idEditorial"].ToString()),
							});
						}
					}
				}
			}
			return Json(libro, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETLibros_Categorias()
		{
			List<Libros_Categorias> libros_cat = new List<Libros_Categorias>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeLibros_Categorias";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libros_cat.Add(new Libros_Categorias
							{
								ID_Categoria = int.Parse(lector["idCategoria"].ToString()),
								ID_Libro = lector["idLibro"].ToString(),
							});
						}
					}
				}
			}
			return Json(libros_cat, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETLibros_Ubicaciones()
		{
			List<Libros_Ubicaciones> libros_ubi = new List<Libros_Ubicaciones>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeLibros_Ubicaciones";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							libros_ubi.Add(new Libros_Ubicaciones
							{
								ID_Ubicacion = int.Parse(lector["idUbicacion"].ToString()),
								ID_Libro = int.Parse(lector["idLibro"].ToString()),
							});
						}
					}
				}
			}
			return Json(libros_ubi, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETPrestamos()
		{
			List<Prestamos> prestamos = new List<Prestamos>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDePrestamos";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							prestamos.Add(new Prestamos
							{
								ID = int.Parse(lector["idPrestamo"].ToString()),
								FechaPrestamo = lector["FechPrestamo"].ToString(),
								FechaDevolucion = lector["FechDevolucion"].ToString(),
								ID_Usuario = int.Parse(lector["idUsuario"].ToString())
							});
						}
					}
				}
			}
			return Json(prestamos, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETResenas()
		{
			List<Resenas> resenas = new List<Resenas>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeReseñas";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							resenas.Add(new Resenas
							{
								ID = int.Parse(lector["idReseña"].ToString()),
								Comentario = lector["Comentario"].ToString(),
								Puntuacion = int.Parse(lector["Puntuacion"].ToString()),
								ID_Libro = int.Parse(lector["idUsuario"].ToString()),
								ID_Usuario = int.Parse(lector["idLibro"].ToString()),
							});
						}
					}
				}
			}
			return Json(resenas, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETUbicaciones()
		{
			List<Ubicaciones> ubicaciones = new List<Ubicaciones>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeUbicaciones";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							ubicaciones.Add(new Ubicaciones
							{
								ID = int.Parse(lector["idUbicacion"].ToString()),
								Seccion = lector["Seccion"].ToString(),
								Nivel = int.Parse(lector["Nivel"].ToString()),
								Estante = int.Parse(lector["Estante"].ToString()),
							});
						}
					}
				}
			}
			return Json(ubicaciones, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GETUsuarios()
		{
			List<Usuarios> usuarios = new List<Usuarios>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "ListaDeUsuarios";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							usuarios.Add(new Usuarios
							{
								ID = int.Parse(lector["idUsuario"].ToString()),
								Usuario = lector["Usuario"].ToString(),
								Password = lector["Password"].ToString(),
								ID_Rol = int.Parse(lector["idRol"].ToString()),
								Nombre = lector["NombreCompleto"].ToString(),
								Telefono = long.Parse(lector["Telefono"].ToString()),
								Direccion = lector["Direccion"].ToString(),
							});
						}
					}
				}
			}
			return Json(usuarios, JsonRequestBehavior.AllowGet);
		}


		[HttpGet]
		public JsonResult GETUsuariosMOD()
		{
			List<Usuarios> usuarios = new List<Usuarios>();

			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string Query = "GETUsuariosMOD";
				using (SqlCommand comando = new SqlCommand(Query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					conexion.Open();
					using (SqlDataReader lector = comando.ExecuteReader())
					{
						while (lector.Read())
						{
							usuarios.Add(new Usuarios
							{
								ID = int.Parse(lector["idUsuario"].ToString()),
								Usuario = lector["Usuario"].ToString(),
								Password = lector["Password"].ToString(),
								ID_Rol = int.Parse(lector["idRol"].ToString()),
								Nombre = lector["NombreCompleto"].ToString(),
								Telefono = long.Parse(lector["Telefono"].ToString()),
								Direccion = lector["Direccion"].ToString(),
							});
						}
					}
				}
			}
			return Json(usuarios, JsonRequestBehavior.AllowGet);
		}

		// AUTORES
		[HttpPost]
		public JsonResult INSERTAutores(Autores autor)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTAutor";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Nombre", autor.Nombre);
					comando.Parameters.AddWithValue("@Apellido1", autor.Apellido1);
					comando.Parameters.AddWithValue("@Apellido2", autor.Apellido2);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEAutores(Autores autor)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEAutor";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", autor.ID);
					comando.Parameters.AddWithValue("@Nombre", autor.Nombre);
					comando.Parameters.AddWithValue("@Apellido1", autor.Apellido1);
					comando.Parameters.AddWithValue("@Apellido2", autor.Apellido2);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEAutores(Autores autor)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEAutor";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", autor.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		// CATEGORIAS
		[HttpPost]
		public JsonResult INSERTCategorias(Categorias categoria)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTCategoria";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Nombre", categoria.Nombre);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATECategorias(Categorias categoria)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATECategoria";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", categoria.ID);
					comando.Parameters.AddWithValue("@Nombre", categoria.Nombre);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETECategorias(Categorias categoria)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETECategoria";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", categoria.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//EDITORIALES
		[HttpPost]
		public JsonResult INSERTEditoriales(Editoriales editoriales)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTEditoriales";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Nombre", editoriales.Nombre);
					comando.Parameters.AddWithValue("@Direccion", editoriales.Direccion);
					comando.Parameters.AddWithValue("@Telefono", editoriales.Telefono);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEEditoriales(Editoriales editoriales)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEEditoriales";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", editoriales.ID);
					comando.Parameters.AddWithValue("@Nombre", editoriales.Nombre);
					comando.Parameters.AddWithValue("@Direccion", editoriales.Direccion);
					comando.Parameters.AddWithValue("@Telefono", editoriales.Telefono);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEEditoriales(Editoriales editoriales)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEEditoriales";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", editoriales.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Libro
		[HttpPost]
		public JsonResult INSERTLibro(Libro libro)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTLibro";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", libro.ISBN);
					comando.Parameters.AddWithValue("@Titulo", libro.Titulo);
					comando.Parameters.AddWithValue("@AñoPublicacion", libro.AñoPublicacion);
					comando.Parameters.AddWithValue("@Autor", libro.ID_Autor);
					comando.Parameters.AddWithValue("@Editorial", libro.ID_Editorial);
					comando.Parameters.AddWithValue("@URL", libro.URL);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATELibro(Libro libro)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATELibro";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", libro.ISBN);
					comando.Parameters.AddWithValue("@Titulo", libro.Titulo);
					comando.Parameters.AddWithValue("@AñoPublicacion", libro.AñoPublicacion);
					comando.Parameters.AddWithValue("@Autor", libro.ID_Autor);
					comando.Parameters.AddWithValue("@Editorial", libro.ID_Editorial);
					comando.Parameters.AddWithValue("@URL", libro.URL);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETELibro(Libro libro)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETELibro";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", libro.ISBN);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Libros
		[HttpPost]
		public JsonResult INSERTLibros(Libros libros)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTLibros";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ISBN", libros.ISBN);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATELibros(Libros libros)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATELibros";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", libros.ID);
					comando.Parameters.AddWithValue("@Prestado", libros.ID_Prestamo);
					comando.Parameters.AddWithValue("@ISBN", libros.ISBN);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETELibros(Libros libros)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETELibros";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", libros.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Libros_Categorias
		[HttpPost]
		public JsonResult INSERTLibros_Categorias(Libros_Categorias libros_cat)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTLibros_Categorias";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID_Categoria", libros_cat.ID_Categoria);
					comando.Parameters.AddWithValue("@ID_Libro", libros_cat.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETELibros_Categorias(Libros_Categorias libros_cat)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETELibros_Categorias";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID_Categoria", libros_cat.ID_Categoria);
					comando.Parameters.AddWithValue("@ID_Libro", libros_cat.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Libros_Ubicaciones
		[HttpPost]
		public JsonResult INSERTLibros_Ubicaciones(Libros_Ubicaciones libros_ubic)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTLibros_Ubicaciones";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID_Ubicacion", libros_ubic.ID_Ubicacion);
					comando.Parameters.AddWithValue("@ID_Libro", libros_ubic.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETELibros_Ubicaciones(Libros_Ubicaciones libros_ubic)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETELibros_Ubicaciones";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID_Ubicacion", libros_ubic.ID_Ubicacion);
					comando.Parameters.AddWithValue("@ID_Libro", libros_ubic.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Prestamos
		[HttpPost]
		public JsonResult INSERTPrestamos(Prestamos prestamo)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTPrestamos";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@FechaPrestamo", prestamo.FechaPrestamo);
					comando.Parameters.AddWithValue("@FechaDevolucion", prestamo.FechaDevolucion);
					comando.Parameters.AddWithValue("@ID_Usuario", prestamo.ID_Usuario);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEPrestamos(Prestamos prestamo)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEPrestamos";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", prestamo.ID);
					comando.Parameters.AddWithValue("@FechaPrestamo", prestamo.FechaPrestamo);
					comando.Parameters.AddWithValue("@FechaDevolucion", prestamo.FechaDevolucion);
					comando.Parameters.AddWithValue("@ID_Usuario", prestamo.ID_Usuario);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEPrestamos(Prestamos prestamo)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEPrestamos";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", prestamo.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Resenas
		[HttpPost]
		public JsonResult INSERTResenas(Resenas resena)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTReseñas";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Comentario", resena.Comentario);
					comando.Parameters.AddWithValue("@Puntuacion", resena.Puntuacion);
					comando.Parameters.AddWithValue("@ID_Usuario", resena.ID_Usuario);
					comando.Parameters.AddWithValue("@ID_Libro", resena.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEResenas(Resenas resena)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEReseñas";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", resena.ID);
					comando.Parameters.AddWithValue("@Comentario", resena.Comentario);
					comando.Parameters.AddWithValue("@Puntuacion", resena.Puntuacion);
					comando.Parameters.AddWithValue("@ID_Usuario", resena.ID_Usuario);
					comando.Parameters.AddWithValue("@ID_Libro", resena.ID_Libro);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEResenas(Resenas resena)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEReseñas";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", resena.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Ubicaciones
		[HttpPost]
		public JsonResult INSERTUbicaciones(Ubicaciones ubicacion)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTUbicaciones";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Seccion", ubicacion.Seccion);
					comando.Parameters.AddWithValue("@Nivel", ubicacion.Nivel);
					comando.Parameters.AddWithValue("@Estante", ubicacion.Estante);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEUbicaciones(Ubicaciones ubicacion)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEUbicaciones";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", ubicacion.ID);
					comando.Parameters.AddWithValue("@Seccion", ubicacion.Seccion);
					comando.Parameters.AddWithValue("@Nivel", ubicacion.Nivel);
					comando.Parameters.AddWithValue("@Estante", ubicacion.Estante);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEUbicaciones(Ubicaciones ubicacion)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEUbicaciones";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", ubicacion.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		//Usuarios
		[HttpPost]
		public JsonResult INSERTUsuarios(Usuarios cuenta)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "INSERTUsuarios";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Password", cuenta.Password);
					comando.Parameters.AddWithValue("@ID_Rol", cuenta.ID_Rol);
					comando.Parameters.AddWithValue("@Nombre", cuenta.Nombre);
					comando.Parameters.AddWithValue("@ApellidoP", cuenta.ApellidoP);
					comando.Parameters.AddWithValue("@ApellidoM", cuenta.ApellidoM);
					comando.Parameters.AddWithValue("@Telefono", cuenta.Telefono);
					comando.Parameters.AddWithValue("@Direccion", cuenta.Direccion);
					comando.Parameters.AddWithValue("@Usuario", cuenta.Usuario);
					conexion.Open();

					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult UPDATEUsuarios(Usuarios cuenta)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "UPDATEUsuarios";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", cuenta.ID);
					comando.Parameters.AddWithValue("@Password", cuenta.Password);
					comando.Parameters.AddWithValue("@ID_Rol", cuenta.ID_Rol);
					comando.Parameters.AddWithValue("@Nombre", cuenta.Nombre);
					comando.Parameters.AddWithValue("@ApellidoP", cuenta.ApellidoP);
					comando.Parameters.AddWithValue("@ApellidoM", cuenta.ApellidoM);
					comando.Parameters.AddWithValue("@Telefono", cuenta.Telefono);
					comando.Parameters.AddWithValue("@Direccion", cuenta.Direccion);
					comando.Parameters.AddWithValue("@Usuario", cuenta.Usuario);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
					}
					catch (Exception ex)
					{
						message = "Error: " + ex.Message;
					}
				}
			}

			return Json(new { Message = message });
		}

		[HttpPost]
		public JsonResult DELETEUsuarios(Usuarios cuenta)
		{
			string message;
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "DELETEUsuarios";
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@ID", cuenta.ID);
					conexion.Open();
					try
					{
						comando.ExecuteNonQuery();
						message = "Operacion Exitosa";
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