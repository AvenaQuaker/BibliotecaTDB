using System;
using System.Web.Mvc;
using Login.Models;
using System.Data.SqlClient;
using System.Data;
using System.Reflection;

namespace Login.Controllers
{
	public class AccountController : Controller
	{ 
		private string connectionString = "data source=JAIMEA\\SQLEXPRESS; database=BibliotecaTDB; integrated security = SSPI;";

		// GET: Entrada
		[HttpGet]
		public ActionResult Index()
		{
			return View("Login");
		}

		// POST: Logout
		[HttpPost]
		public ActionResult Logout()
		{
			Session.Clear();
			return RedirectToAction("Index", "Account");
		}

		// POST: Login
		[HttpPost]
		public ActionResult Login(Usuarios cuenta)
		{
			var usuario = LoginUser(cuenta.Usuario, cuenta.Password);

			if (usuario != null)
			{
				switch (usuario.ID_Rol)
				{
					case 1:
						Session["Usuario"] = usuario.Usuario;
						Session["ID"] = usuario.ID;
						return RedirectToAction("Admin", "Backend");
					case 2:
						Session["Usuario"] = usuario.Usuario;
						Session["ID"] = usuario.ID;
						return RedirectToAction("Mod", "Backend");
					default:
						Session["Usuario"] = usuario.Usuario;
						Session["ID"] = usuario.ID;
						return RedirectToAction("Index", "Home");

				}
			}
			else
			{
				ViewBag.Message = TempData["ErrorMessage"];
				return View("Login");
			}
		}

		private Usuarios LoginUser(string usuario, string password)
		{
			using (SqlConnection conexion = new SqlConnection(connectionString))
			{
				string query = "InicioDeSesion"; 
				using (SqlCommand comando = new SqlCommand(query, conexion))
				{
					comando.CommandType = CommandType.StoredProcedure;
					comando.Parameters.AddWithValue("@Nombre", usuario);
					comando.Parameters.AddWithValue("@Password", password);

					conexion.Open();

					try
					{
						using (SqlDataReader reader = comando.ExecuteReader())
						{
							if (reader.Read())
							{
								return new Usuarios
								{
									ID = (int)reader["idUsuario"],
									Usuario = (string)reader["Usuario"],
									Password = (string)reader["Password"],
									ID_Rol = (int)reader["idRol"]
								};
							}
							else
							{
								return null;
							}
						}
					}
					catch (SqlException ex)
					{
						TempData["ErrorMessage"] = ex.Message;
						return null;
					}
				}
			}
		}

		// POST: Registro
		[HttpPost]
		public ActionResult Register(Usuarios cuenta)
		{
			string mensajeError = null;
			if (RegisterUser(cuenta, out mensajeError))
			{
				ViewBag.Message = "Registro exitoso. Por favor, inicia sesión.";
			}
			else
			{
				ViewBag.Message = mensajeError;
			}

			return View("Login");
		}

		private bool RegisterUser(Usuarios cuenta, out string mensajeError)
		{
			mensajeError = null;
			try
			{
				using (SqlConnection conexion = new SqlConnection(connectionString))
				{
					string query = "Registro";
					using (SqlCommand comando = new SqlCommand(query, conexion))
					{
						comando.CommandType = CommandType.StoredProcedure;
						comando.Parameters.AddWithValue("@Nombre", cuenta.Nombre);
						comando.Parameters.AddWithValue("@ApellidoP", cuenta.ApellidoP);
						comando.Parameters.AddWithValue("@ApellidoM", cuenta.ApellidoM);
						comando.Parameters.AddWithValue("@Telefono", cuenta.Telefono);
						comando.Parameters.AddWithValue("@Direccion", cuenta.Direccion);
						comando.Parameters.AddWithValue("@Usuario", cuenta.Usuario);
						comando.Parameters.AddWithValue("@Contraseña", cuenta.Password);

						conexion.Open();
						comando.ExecuteNonQuery();
						return true;
					}
				}
			}
			catch (Exception ex)
			{
				mensajeError = ex.Message;
				return false;
			}
		}

	}
}
