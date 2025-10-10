import React, { useEffect, useState } from "react";
import logoUrl from "./assets/logo.png?v=4";
import heroUrl from "./assets/hero-avac.png?v=4";
import "./styles.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Adicionar script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Funções de controlo
    const openCalendly = () => {
      setShowOverlay(true);
      window.Calendly.initPopupWidget({ url: "https://calendly.com/temperis" });
    };

    const closeCalendly = () => setShowOverlay(false);

    // Ouvir quando Calendly fecha o widget
    window.addEventListener("message", (event) => {
      if (event.data?.event === "calendly.event_scheduled" || event.data?.event === "calendly.close") {
        closeCalendly();
      }
    });

    // Aguardar botão e associar evento
    const interval = setInterval(() => {
      const button = document.getElementById("open-calendly");
      if (button) {
        button.addEventListener("click", openCalendly);
        clearInterval(interval);
      }
    }, 500);

    // Limpeza
    return () => {
      clearInterval(interval);
      const button = document.getElementById("open-calendly");
      if (button) button.removeEventListener("click", openCalendly);
      window.removeEventListener("message", closeCalendly);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative text-center bg-gray-100 py-20">
        <img src={heroUrl} alt="Hero" className="mx-auto rounded-2xl shadow-lg w-4/5" />
        <h1 className="text-4xl font-bold mt-8">Manutenção e Soluções AVAC</h1>
        <p className="text-gray-700 mt-3">
          Serviço profissional e poupança garantida na sua fatura de energia.
        </p>
      </section>

      {/* Agendamento */}
      <section id="agendamento" className="py-16 bg-white text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">Agende a sua manutenção</h2>
        <p className="mb-4 text-gray-700">
          Escolha o melhor horário para si e agende a manutenção do seu sistema AVAC de forma simples e rápida.
        </p>
        <button
          id="open-calendly"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Agendar agora
        </button>
      </section>

      {/* Overlay elegante e reativo */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn z-50 flex items-center justify-center"
          onClick={() => {
            setShowOverlay(false);
            if (window.Calendly) window.Calendly.closePopupWidget();
          }}
        ></div>
      )}
    </div>
  );
}

export default App;
