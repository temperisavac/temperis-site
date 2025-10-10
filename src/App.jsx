import React from 'react'
import Testimonial from './components/Testimonial.jsx'
import logoUrl from './assets/logo.png?v=4';
import heroUrl from './assets/hero-avac.png?v=4';

import React, { useEffect } from "react";

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  const button = document.getElementById("open-calendly");
  button.addEventListener("click", () => {
    window.Calendly.initPopupWidget({ url: "https://calendly.com/temperis" });
  });

  return () => {
    button.removeEventListener("click", () => {});
  };
}, []);

export default function App() {
  return (
    <>
      <a
        href="https://wa.me/351969337121"
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 shadow-lg rounded-full p-4 bg-green-500 hover:bg-green-600 text-white transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.56 0 .3 5.26.3 11.76c0 2.07.53 4.07 1.55 5.86L0 24l6.55-1.77a11.72 11.72 0 0 0 5.5 1.4h.01c6.5 0 11.76-5.26 11.76-11.76 0-3.15-1.23-6.12-3.3-8.39ZM12.06 21.3h-.01a9.6 9.6 0 0 1-4.9-1.35l-.35-.21-3.89 1.05 1.04-3.79-.23-.38a9.56 9.56 0 0 1-1.46-5.15c0-5.28 4.29-9.57 9.57-9.57 2.56 0 4.96.99 6.77 2.8a9.49 9.49 0 0 1 2.8 6.77c0 5.28-4.29 9.57-9.57 9.57Zm5.53-7.16c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.46-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.57-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.48 1.06 2.9 1.21 3.1.15.2 2.09 3.19 5.07 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>
      </a>

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="TEMPERIS" className="w-9 h-9" />
            <span className="font-semibold text-lg">TEMPERIS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#beneficios" className="hover:text-brand-700">Porquê TEMPERIS</a>
            <a href="#precos" className="hover:text-brand-700">Preçário</a>
            <a href="#testemunhos" className="hover:text-brand-700">Testemunhos</a>
            <a href="#contacto" className="hover:text-brand-700">Orçamentos</a>
            <a href="#agendar" className="rounded-lg px-4 py-2 bg-brand-700 text-white hover:bg-brand-600">Agendar</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Manutenção e soluções AVAC
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Poupança na fatura da luz, melhor qualidade do ar e vida útil prolongada dos equipamentos.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#agendar" className="px-6 py-3 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-600">Agendar visita</a>
                <a href="#beneficios" className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100">Saber mais</a>
              </div>
            </div>
            <div className="relative">
              <img src={heroUrl} alt="Manutenção de ar condicionado" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Porquê aderir à <span className="text-brand-700">TEMPERIS</span>?</h2>
          <p className="mt-2 text-gray-600">Manutenção preventiva AVAC = conforto, eficiência e poupança.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl border">
              <h3 className="font-semibold text-lg">Poupança na fatura</h3>
              <p className="mt-2 text-gray-600">Equipamentos limpos consomem menos energia. Clientes relatam reduções notáveis.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border">
              <h3 className="font-semibold text-lg">Ar mais saudável</h3>
              <p className="mt-2 text-gray-600">Higienização de filtros e trocadores melhora o ar e reduz alergénios.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border">
              <h3 className="font-semibold text-lg">Vida útil prolongada</h3>
              <p className="mt-2 text-gray-600">Menos desgaste e menos avarias — maior durabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="precos" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Preçário</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">1 máquina</h3>
              <p className="mt-2 text-gray-600">Manutenção completa</p>
              <div className="mt-4 text-3xl font-extrabold text-brand-700">55€</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">2 máquinas</h3>
              <p className="mt-2 text-gray-600">Manutenção completa</p>
              <div className="mt-4 text-3xl font-extrabold text-brand-700">100€</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">&gt; 2 máquinas</h3>
              <p className="mt-2 text-gray-600">Necessário orçamento</p>
              <div className="mt-4 text-3xl font-extrabold text-brand-700">Sob consulta</div>
            </div>
          </div>
        </div>
      </section>

      <section id="agendamento" className="py-16 bg-gray-100 text-center">
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




      <section id="testemunhos" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">O que dizem os clientes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Testimonial text="Serviço 5 estrelas. O equipamento ficou mais silencioso e noto poupança na fatura." name="Marta Rodrigues" />
            <Testimonial text="Profissionais e rápidos. O ar está bem mais limpo cá em casa." name="Luís Almeida" />
            <Testimonial text="Voltarei a contratar. Excelente manutenção preventiva." name="Andreia Pinto" />
            <Testimonial text="Recomendo. A unidade consome menos e o conforto é melhor." name="Tiago Sousa" />
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Pedir orçamento</h2>
          <p className="mt-2 text-gray-600">Responda em poucas horas. Recebemos diretamente no e-mail TEMPERIS.</p>
          <form id="quote-form" className="mt-8 grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl border" onSubmit={handleSubmit}>
            <input required name="nome" placeholder="Nome" className="px-4 py-3 rounded-xl border outline-brand-700" />
            <input required type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl border outline-brand-700" />
            <input name="telefone" placeholder="Telefone (opcional)" className="px-4 py-3 rounded-xl border outline-brand-700" />
            <input required name="local" placeholder="Local/Concelho" className="px-4 py-3 rounded-xl border outline-brand-700" />
            <select name="quantidade" className="px-4 py-3 rounded-xl border outline-brand-700">
              <option value="3">3 máquinas</option>
              <option value="4">Mais de 3 máquinas</option>
            </select>
            <textarea required name="mensagem" rows="4" placeholder="Descreva o pedido..." className="px-4 py-3 rounded-xl border outline-brand-700 md:col-span-2"></textarea>
            <button className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-600 text-white font-semibold md:col-span-2">Enviar pedido</button>
            <p id="form-status" className="md:col-span-2 text-sm text-gray-600"></p>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="TEMPERIS" className="w-7 h-7" />
            <span className="font-semibold">TEMPERIS</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/temperisavac/" target="_blank" className="text-sm hover:text-brand-700">Instagram</a>
            <a href="#agendar" className="text-sm hover:text-brand-700">Agendar</a>
            <a href="#precos" className="text-sm hover:text-brand-700">Preçário</a>
          </div>
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} TEMPERIS. Todos os direitos reservados.</div>
        </div>
      </footer>
    </>
  )
}

async function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const statusEl = form.querySelector('#form-status')
  statusEl.textContent = 'A enviar...'

  const data = Object.fromEntries(new FormData(form).entries())
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error('Falha no envio')
    statusEl.textContent = 'Pedido enviado com sucesso! Vamos responder em breve.'
    form.reset()
  } catch (err) {
    statusEl.textContent = 'Ocorreu um erro ao enviar. Tente novamente.'
  }
}
