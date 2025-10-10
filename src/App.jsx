import React, { useEffect, useState, useCallback } from "react";
import logoUrl from "./assets/logo.png?v=4";
import heroUrl from "./assets/hero-avac.png?v=4";
import "./styles.css";

const CALENDLY_URL = "https://calendly.com/temperis";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openCalendly = useCallback(() => {
    setShowOverlay(true);
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      setShowOverlay(false);
    }
  }, []);

  useEffect(() => {
    // Injeta o script do Calendly apenas uma vez
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }

    // Fecha o overlay quando o Calendly fecha ou agenda
    const onMessage = (e) => {
      if (e?.data?.event === "calendly.event_scheduled" || e?.data?.event === "calendly.close") {
        setShowOverlay(false);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="relative">
      {/* Cabeçalho com logo + nome */}
      <header className="flex items-center justify-center gap-4 py-4 bg-white shadow-sm">
        <img src={logoUrl} alt="Temperis" className="h-20 w-auto object-contain" />
        <span className="text-3xl font-bold text-gray-800 tracking-wide">TEMPERIS</span>
      </header>

      {/* Hero */}
      <section className="relative text-center bg-gray-100 py-20">
        <img
          src={heroUrl}
          alt="Sistemas AVAC"
          className="mx-auto rounded-2xl shadow-lg w-4/5 max-w-5xl object-cover"
        />
        <h2 className="text-4xl font-bold mt-8">Manutenção e Soluções AVAC</h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Aumente a vida útil do seu sistema, reduza o consumo de energia e respire um ar mais puro com a manutenção
          profissional da TEMPERIS.
        </p>
      </section>

      {/* Agendamento */}
      <section id="agendamento" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Agende a sua manutenção</h2>
        <p className="mb-4 text-gray-700">
          Escolha o melhor horário para si e agende a manutenção do seu sistema AVAC de forma simples e rápida.
        </p>
        <button
          type="button"
          onClick={openCalendly}
          className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Agendar agora
        </button>
      </section>

      {/* Testemunhos */}
      <section id="testemunhos" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">O que dizem os nossos clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { nome: "Carlos M.", texto: "Serviço excelente! A manutenção correu muito bem e noto diferença na conta da luz.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { nome: "Ana S.", texto: "Profissionais impecáveis, super simpáticos e o ar da casa ficou muito mais limpo!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { nome: "Rui F.", texto: "Recomendo totalmente. Serviço rápido e com resultados visíveis de imediato!", img: "https://randomuser.me/api/portraits/men/28.jpg" },
            { nome: "Marta G.", texto: "Desde que fiz a manutenção, o equipamento trabalha mais silencioso e eficiente!", img: "https://randomuser.me/api/portraits/women/68.jpg" },
            { nome: "João P.", texto: "Excelente atendimento e grande poupança na fatura de energia. 5 estrelas!", img: "https://randomuser.me/api/portraits/men/15.jpg" },
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src={c.img} alt={c.nome} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-gray-700 italic mb-3">"{c.texto}"</p>
              <h4 className="font-semibold text-blue-600">{c.nome}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Overlay do Calendly */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn z-50"
          onClick={() => {
            setShowOverlay(false);
            if (window.Calendly) window.Calendly.closePopupWidget();
          }}
        />
      )}
    </div>
  );
}
