import { NextRequest, NextResponse } from "next/server";

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

    // Basic validation
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

    // Here you would integrate with your email service provider (e.g., Resend, SendGrid, Nodemailer).
    // For now, we log the submission and return success.
    // Example integration point:
    //
    // await sendEmail({
    //   from: "noreply@heiddyawais.com",
    //   to: "heiddya24@gmail.com",
    //   subject: `Nuevo mensaje de contacto: ${tipoConsulta}`,
    //   html: `<p><strong>Nombre:</strong> ${nombre}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>WhatsApp:</strong> ${body.whatsapp || "No proporcionado"}</p>
    //          <p><strong>Empresa:</strong> ${body.empresa || "No proporcionada"}</p>
    //          <p><strong>Tipo:</strong> ${tipoConsulta}</p>
    //          <p><strong>Mensaje:</strong><br>${mensaje}</p>`,
    // });

    console.log("Contacto form submission:", {
      nombre,
      email,
      whatsapp: body.whatsapp,
      empresa: body.empresa,
      tipoConsulta,
      mensajeLength: mensaje.length,
      timestamp: new Date().toISOString(),
    });

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
