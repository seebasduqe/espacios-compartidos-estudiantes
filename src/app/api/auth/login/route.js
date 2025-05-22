import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  const db = Database.instance;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  try {
    const results = await db.fetchData(query, [email, password]);

    const idUser = results[0].id ? results[0].id : 0;

    if (results.length > 0) {
      // Si las credenciales son válidas
      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          email,
          username: results[0].username, // Asumiendo que 'username' está en la tabla
        },
        "secret"
      );

      const response = NextResponse.json({ token, idUser });

      response.cookies.set({
        name: "myTokenName",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });

      return response;
    } 
  } catch (error) {
    console.error('Database query error:', error);
    // Log de error si hay problemas en la consulta
    const logQueryError = `
     INSERT INTO logs (tipo, accion, descripcion, estado, user_id, fecha)
     VALUES (3, 'login', 'Error al intentar iniciar sesión', 0, NULL, NOW())`;
    await db.fetchData(logQueryError);
    return NextResponse.json(
      {
        message: "Error verifying credentials",
      },
      {
        status: 500,
      }
    );
  }
}
