import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactoPayload {
  nombre: string;
  email: string;
  whatsapp?: string;
  empresa?: string;
  tipoConsulta: string;
  mensaje: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactoPayload;

    const { nombre, email, tipoConsulta, mensaje } = body;

    if (!nombre || nombre.trim().length < 2) {
      return NextResponse.json(
        { message: "Por favor ingresa tu nombre completo." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Por favor ingresa un email válido." },
        { status: 400 }
      );
    }

    if (!tipoConsulta) {
      return NextResponse.json(
        { message: "Por favor selecciona el tipo de consulta." },
        { status: 400 }
      );
    }

    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json(
        { message: "Por favor escribe un mensaje más detallado (mínimo 10 caracteres)." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Formulario de Contacto <hola@heiddyawais.com>",
      to: ["heiddy@heiddyawais.com"],
      replyTo: email,
      subject: `Nuevo mensaje: ${tipoConsulta} — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0a500; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Nombre:</td>
              <td style="padding: 8px 0; color: #333;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            ${body.whatsapp ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">WhatsApp:</td>
              <td style="padding: 8px 0; color: #333;">${body.whatsapp}</td>
            </tr>` : ""}
            ${body.empresa ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Empresa:</td>
              <td style="padding: 8px 0; color: #333;">${body.empresa}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Tipo de consulta:</td>
              <td style="padding: 8px 0; color: #333;">${tipoConsulta}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Mensaje:</p>
            <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; color: #333; line-height: 1.6;">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Enviado desde heiddyawais.com — Puedes responder directamente a este email.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Error al enviar el mensaje. Por favor intenta de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje recibido correctamente. Te responderemos pronto." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contacto form:", error);
    return NextResponse.json(
      { message: "Error interno del servidor. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
