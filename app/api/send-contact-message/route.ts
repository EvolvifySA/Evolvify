import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface ContactMessage {
  name: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactMessage = await request.json();

    // Validar dados
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      );
    }

   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const adminEmailContent = `
      <h2>Nova mensagem de contato da Evolvify</h2>
      <p><strong>Nome:</strong> ${body.name}</p>
      <p><strong>WhatsApp:</strong> ${body.phone}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${body.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Enviado em: ${new Date().toLocaleString("pt-BR")}</small></p>
    `;

    const clientEmailContent = `
      <h2>Obrigado por entrar em contato!</h2>
      <p>Olá <strong>${body.name}</strong>,</p>
      <p>Recebemos sua mensagem e vamos responder em breve!</p>
      <p>Enquanto isso, você também pode nos chamar no WhatsApp para uma resposta mais rápida.</p>
      <hr>
      <p><strong>Seus dados:</strong></p>
      <p><strong>Nome:</strong> ${body.name}</p>
      <p><strong>WhatsApp:</strong> ${body.phone}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${body.message.replace(/\n/g, "<br>")}</p>
    `;

    // Enviar email para o admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Nova mensagem de contato - ${body.name}`,
      html: adminEmailContent,
    });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
