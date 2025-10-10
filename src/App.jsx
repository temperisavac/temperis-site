import React, { useEffect, useState } from "react";
import logoUrl from "./assets/logo.png?v=4";
import heroUrl from "./assets/hero-avac.png?v=4";
import "./styles.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Carregar script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Função abrir Calendly
    const openCalendly = () => {
      setShowOverlay(true);
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: "https://calendly.com/temperis" });
      } else {
        window.open("https://calendly.com/temperis", "_blank");
      }
    };

    // Fechar overlay quando Calendly fecha
    window.addEventListener("message", (event) => {
      if (
        event.data?.event === "calendly.event_scheduled" ||
        event.data?.event === "calendly.close"
      ) {
        setShowOverlay(false);
      }
    });

    // Esperar botão e associar evento
    const interval = setInterval(() => {
      const button = document.getElementById("open-calendly");
      if (button) {
        button.addEventListener("click", openCalendly);
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      const button = document.getElementById("open-calendly");
      if (button) button.removeEventListener("click", openCalendly);
    };
  }, []);

  return (
    <div className="relative">
      {/* Cabeçalho */}
      <header className="flex items-center justify-center py-4 bg-white shadow-sm">
        <img
          src={logoUrl}
          alt="Temperis"
          className="h-14 w-auto object-contain"
        />
      </header>

      {/* Hero */}
      <section className="relative text-center bg-gray-100 py-20">
        <img
          src={heroUrl}
          alt="Hero"
          className="mx-auto rounded-2xl shadow-lg w-4/5 max-w-5xl object-cover"
        />
        <h1 className="text-4xl font-bold mt-8">Manutenção e Soluções AVAC</h1>
        <p className="text-gray-700 mt-3">
          Serviço profissional e poupança garantida na sua fatura de energia.
        </p>
      </section>

      {/* Agendamento */}
      <section id="agendamento" className="py-16 bg-white text-center">
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

      {/* Testemunhos */}
      <section id="testemunhos" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">O que dizem os nossos clientes</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              nome: "Carlos M.",
              texto: "Serviço excelente! A manutenção correu muito bem e noto diferença na conta da luz.",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              nome: "Ana S.",
              texto: "Profissionais impecáveis, super simpáticos e o ar da casa ficou muito mais limpo!",
              img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              nome: "Rui F.",
              texto: "Recomendo totalmente. Serviço rápido e com resultados visíveis de imediato!",
              img: "https://randomuser.me/api/portraits/men/28.jpg"
            },
            {
              nome: "Marta G.",
              texto: "Desde que fiz a manutenção, o equipamento trabalha mais silencioso e eficiente!",
              img: "https://randomuser.me/api/portraits/women/68.jpg"
            },
            {
              nome: "João P.",
              texto: "Excelente atendimento e grande poupança na fatura de energia. 5 estrelas!",
              img: "https://randomuser.me/api/portraits/men/15.jpg"
            }
          ].map((cliente, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={cliente.img}
                alt={cliente.nome}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-3">"{cliente.texto}"</p>
              <h4 className="font-semibold text-blue-600">{cliente.nome}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Overlay elegante */}
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
