"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const consultaOptions = [
  { value: "", label: "Selecciona el tipo de consulta" },
  { value: "conferencia", label: "Contratar conferencia / keynote" },
  { value: "coaching", label: "Coaching individual" },
  { value: "workshop", label: "Workshop o taller" },
  { value: "libro", label: "Consulta sobre el libro" },
  { value: "prensa", label: "Solicitud de prensa / medios" },
  { value: "colaboracion", label: "Colaboración o alianza" },
  { value: "otro", label: "Otro" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  whatsapp: string;
  empresa: string;
  tipoConsulta: string;
  mensaje: string;
}

const initialFormData: FormData = {
  nombre: "",
  email: "",
  whatsapp: "",
  empresa: "",
  tipoConsulta: "",
  mensaje: "",
};

export default function ContactoForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          (data as { message?: string }).message ||
            "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Error de conexión. Por favor intenta de nuevo.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    background: "var(--white)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9375rem",
    color: "var(--dark)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--dark-soft)",
    marginBottom: "8px",
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "#F0FAF4",
          border: "1px solid #A7D7B8",
          borderRadius: "16px",
          padding: "48px",
          textAlign: "center",
        }}
      >
        <CheckCircle size={48} style={{ color: "#2D7A3C", marginBottom: "20px" }} />
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#1A4D26",
            marginBottom: "12px",
          }}
        >
          ¡Mensaje recibido!
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#2D7A3C",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Gracias por escribirme. Te responderé en menos de 24 horas. Mientras tanto, puedes
          seguirme en redes sociales o escribirme por WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--rose-gold)",
            color: "var(--white)",
            padding: "12px 24px",
            borderRadius: "8px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
        className="ha-form-row"
      >
        <div>
          <label htmlFor="nombre" style={labelStyle}>
            Nombre completo <span style={{ color: "var(--rose-gold)" }}>*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email <span style={{ color: "var(--rose-gold)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
        className="ha-form-row"
      >
        <div>
          <label htmlFor="whatsapp" style={labelStyle}>
            WhatsApp{" "}
            <span style={{ color: "var(--gray-light)", fontWeight: 400 }}>(opcional)</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.whatsapp}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="empresa" style={labelStyle}>
            Empresa / Organización{" "}
            <span style={{ color: "var(--gray-light)", fontWeight: 400 }}>(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Tu empresa"
            value={formData.empresa}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="tipoConsulta" style={labelStyle}>
          Tipo de consulta <span style={{ color: "var(--rose-gold)" }}>*</span>
        </label>
        <select
          id="tipoConsulta"
          name="tipoConsulta"
          required
          value={formData.tipoConsulta}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}
        >
          {consultaOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <label htmlFor="mensaje" style={labelStyle}>
          Mensaje <span style={{ color: "var(--rose-gold)" }}>*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          placeholder="Cuéntame sobre lo que necesitas. Cuantos más detalles me des, mejor podré ayudarte."
          value={formData.mensaje}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: "150px" }}
        />
      </div>

      {status === "error" && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            background: "#FFF0F0",
            border: "1px solid #FCA5A5",
            borderRadius: "8px",
            padding: "14px 16px",
            marginBottom: "24px",
          }}
        >
          <AlertCircle size={18} style={{ color: "#B91C1C", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#B91C1C",
            }}
          >
            {errorMessage}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: status === "loading" ? "var(--gray-light)" : "var(--rose-gold)",
          color: "var(--white)",
          padding: "16px 36px",
          borderRadius: "8px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem",
          fontWeight: 500,
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        {status !== "loading" && <ArrowRight size={18} />}
      </button>
    </form>
  );
}
