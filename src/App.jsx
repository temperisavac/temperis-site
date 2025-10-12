import React, { useEffect, useState, useCallback } from "react";
import logoUrl from "./assets/logo.png?v=4";
import heroUrl from "./assets/hero-avac.png?v=4";
import whatsappIcon from "./assets/whatsapp.png";
import gmailIcon from "./assets/gmail.png";
import instagramIcon from "./assets/Instagram.png";
import "./styles.css";
import emailjs from "emailjs-com";

const CALENDLY_URL = "https://calendly.com/temperisavac";
 
  export default function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Função para enviar o formulário de orçamento via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    "service_pjxsdwi",
    "template_ruhg289", // ✅ o teu template ID real
    e.target,
    "okg9eystknLnKS2hx" // ✅ a tua public key
  )

      .then(
        () => {
          alert("✅ Pedido enviado com sucesso! Entraremos em contacto em breve.");
          e.target.reset();
        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
          alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
        }
      );
  };


  // Efeito de sombra, transparência e atualização da classe <body> ao fazer scroll
useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
    
    // Adiciona ou remove a classe 'scrolled' no body
    if (isScrolled) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


 // === CALENDLY CONFIGURAÇÃO ===
const CALENDLY_URL = "https://calendly.com/temperis";

// Carrega o script do Calendly apenas uma vez
useEffect(() => {
  const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => console.log("✅ Calendly carregado");
    document.body.appendChild(script);
  }

  // Fecha overlay quando o Calendly fecha ou o evento é agendado
  const onMessage = (e) => {
    if (e?.data?.event === "calendly.event_scheduled" || e?.data?.event === "calendly.close") {
      setShowOverlay(false);
    }
  };

  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}, []);

const openCalendly = useCallback(() => {
  console.log("🟦 A tentar abrir Calendly...");

  // Fecha qualquer overlay anterior (caso exista)
  setShowOverlay(true);

  // Garante que o script do Calendly está carregado
  if (!window.Calendly) {
    console.warn("⚠️ Calendly ainda não carregado, abrindo em nova aba...");
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    setShowOverlay(false);
    return;
  }

  try {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    console.log("✅ Popup Calendly aberto");
  } catch (error) {
    console.error("❌ Erro ao abrir Calendly:", error);
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }

  // Fecha overlay se popup for fechado
  window.addEventListener("message", (e) => {
    if (e?.data?.event === "calendly.close") setShowOverlay(false);
  });
}, []);





  // ⬇️ Daqui para baixo é o layout visual do site
  return (
  <div className="relative font-sans text-gray-800">
    

      {/* HEADER FIXO */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 border-b border-gray-200/60 ${
          scrolled ? "bg-white/80 shadow-md" : "bg-white/100 shadow-none"
        }`}
      >
        <div className="flex items-center justify-between py-3 pl-12 pr-6 md:pl-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 ml-2 md:ml-6">
            <div
  onClick={() => window.location.href = "/"}
  className="flex items-center gap-3 ml-2 md:ml-6 cursor-pointer select-none"
  title="Voltar ao início"
>
  <img src={logoUrl} alt="Temperis" className="h-14 w-auto object-contain" />
  <span className="text-2xl font-bold text-gray-800 tracking-wide">TEMPERIS</span>
</div>

          </div>

          <nav className="hidden md:flex items-center gap-2">
            <a href="#porque" className="px-3 py-1 rounded-full hover:bg-gray-100">Porquê TEMPERIS</a>
            <a href="#precos" className="px-3 py-1 rounded-full hover:bg-gray-100">Preçário</a>
            <a href="#testemunhos" className="px-3 py-1 rounded-full hover:bg-gray-100">Testemunhos</a>
            <a href="#orcamento" className="px-3 py-1 rounded-full hover:bg-gray-100">Orçamentos</a>
            <button
  onClick={openCalendly}
  className="ml-2 px-4 py-2 text-white rounded-lg transition"
  style={{
    backgroundColor: '#005D83',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00729e')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#005D83')}
>
  Agendar
</button>

          </nav>
        </div>
      </header>

      {/* Espaço para não tapar o conteúdo pelo header fixo */}
      <div className="h-[90px]" />

      {/* HERO */}
<section className="relative flex flex-col md:flex-row items-center justify-between gap-8 pt-10 pb-16 px-8 max-w-7xl mx-auto">
  {/* Texto à esquerda */}
  <div className="md:w-1/2 flex flex-col justify-center">
    <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
      Manutenção e <br /> soluções AVAC
    </h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      Aumente a vida útil do seu sistema, reduza o consumo de energia e respire um ar mais puro com a manutenção
      profissional da <span className="font-semibold" style={{ color: "#005D83" }}>TEMPERIS</span>.
    </p>

    {/* Botões lado a lado */}
    <div className="flex flex-wrap gap-4">
      {/* Botão principal */}
      <button
  onClick={openCalendly}
  className="px-8 py-3 font-semibold rounded-lg shadow text-white transition-transform hover:scale-[1.03]"
  style={{
    backgroundColor: "#24799bff",
  }}
>
  Agendar manutenção
</button>


      {/* Botão secundário */}
      <button
        onClick={() => {
          const target = document.getElementById("porque");
          target?.scrollIntoView({ behavior: "smooth" });
        }}
        className="px-8 py-3 font-semibold rounded-lg shadow transition-transform hover:scale-[1.03] hover:bg-gray-100 border border-gray-300 text-black bg-white"
      >
        Saber mais
      </button>
    </div>
  </div>

  {/* Imagem à direita */}
  <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
    <img
      src={heroUrl}
      alt="Sistemas AVAC"
      className="rounded-2xl shadow-lg w-[85%] max-w-lg object-cover"
    />
  </div>
</section>


      {/* PORQUÊ TEMPERIS */}
      <section id="porque" className="bg-gray-50 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">
          Porquê a <span
  className="font-semibold"
  style={{ color: '#24799bff' }}
>
  TEMPERIS
</span>
?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/zap.svg"
                alt="Poupança"
                className="h-10 w-10"
              />
            </div>
            <h3
  className="text-xl font-semibold mb-2"
  style={{ color: '#24799bff' }}
>
  Poupança Energética
</h3>

            <p className="text-gray-600">
              Manutenção regular reduz consumos e otimiza o desempenho — poupança direta na fatura.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/cog.svg"
                alt="Vida útil"
                className="h-10 w-10"
              />
            </div>
            <h3
  className="text-xl font-semibold mb-2"
  style={{ color: '#24799bff' }}
>
  Maior Vida Útil
</h3>

            <p className="text-gray-600">
              Evite avarias e prolongue a vida do equipamento com manutenção preventiva.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/wind.svg"
                alt="Ar saudável"
                className="h-10 w-10"
              />
            </div>
            <h3
  className="text-xl font-semibold mb-2"
  style={{ color: '#24799bff' }}
>
  Ar mais saudável
</h3>

            <p className="text-gray-600">
              Limpeza profunda elimina poeiras, fungos e bactérias — ar mais limpo para a família.
            </p>
          </div>
        </div>
      </section>

      {/* PREÇÁRIO */}
<section id="precos" className="bg-white py-20 text-center px-6 border-t border-gray-200">
  <h2 className="text-3xl font-bold mb-8">Preçário</h2>
  <p className="text-gray-600 mb-10">
    Valores incluem deslocação, produtos de limpeza, mão de obra e relatório técnico.
  </p>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
    {/* 1 Máquina */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: '#24799bff' }}
      >
        1 Máquina
      </h3>

      <p className="text-4xl font-bold text-gray-800 mb-2">55€</p>
      <p className="text-gray-500 text-sm mb-4">Preço fixo por unidade</p>
      <button
  onClick={openCalendly}
  className="mt-2 px-6 py-2 text-white rounded-lg transition"
  style={{
    backgroundColor: '#24799bff',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2c8ebd')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#24799bff')}
>
  Agendar
</button>

    </div>

    {/* 2 Máquinas */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: '#24799bff' }}
      >
        2 Máquinas
      </h3>

      <p className="text-4xl font-bold text-gray-800 mb-2">100€</p>
      <p className="text-gray-500 text-sm mb-4">Limpeza completa e relatório técnico</p>
      <button
  onClick={openCalendly}
  className="mt-2 px-6 py-2 text-white rounded-lg transition"
  style={{
    backgroundColor: '#24799bff',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2c8ebd')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#24799bff')}
>
  Agendar
</button>

    </div>

    {/* 3+ Máquinas */}
<div
  className="p-8 rounded-2xl shadow hover:shadow-lg transition"
  style={{ backgroundColor: '#24799bff', color: 'white' }}
>
  <h3 className="text-xl font-semibold mb-2 text-white">3 ou + Máquinas</h3>
  <p className="text-2xl font-bold mb-2 text-white">Sob Orçamento</p>
  <p className="text-sm mb-4 text-white/90">Solicite proposta personalizada</p>

  <button
    onClick={() =>
      document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" })
    }
    className="mt-2 px-6 py-2 font-semibold rounded-lg transition"
    style={{
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
  >
    Pedir Orçamento
  </button>
</div>

  </div>
</section>


      {/* PEDIDO DE ORÇAMENTO */}
<section
  id="orcamento"
  className="bg-white py-20 text-center px-6 border-t border-gray-200"
>
  <h2 className="text-3xl font-bold mb-8">Pedir Orçamento</h2>
  <p className="text-gray-600 mb-10">
    Preencha o formulário e entraremos em contacto para confirmar o agendamento.
  </p>

  <form
    onSubmit={handleSubmit}
    className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-left"
  >
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Nome</label>
        <input
          type="text"
          name="nome"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
          placeholder="O seu nome completo"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">E-mail</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
          placeholder="exemplo@email.com"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Telefone</label>
        <input
          type="tel"
          name="telefone"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
          placeholder="Número de telefone"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Morada</label>
        <input
          type="text"
          name="morada"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
          placeholder="Rua, nº, localidade"
        />
      </div>
    </div>

    <div className="mt-4">
      <label className="block text-gray-700 mb-2">Número de Máquinas</label>
      <select
        name="maquinas"
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
      >
        <option value="">Selecione...</option>
        <option value="3 Máquinas">3 Máquinas</option>
        <option value="mais do que 3">mais do que 3 </option>
      </select>
    </div>

    <div className="mt-4">
      <label className="block text-gray-700 mb-2">Mensagem</label>
      <textarea
        name="mensagem"
        rows="4"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#24799bff]"
        placeholder="Escreva aqui alguma observação..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full text-white font-semibold py-3 rounded-lg transition mt-6"
      style={{
        backgroundColor: "#24799bff",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#2c8ebd")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#24799bff")
      }
    >
      Enviar Pedido
    </button>
  </form>
</section>


      {/* TESTEMUNHOS - carrossel infinito com pontos interativos */}
<section id="testemunhos" className="py-20 bg-white text-center overflow-hidden relative">
  <h2 className="text-3xl font-bold mb-10">O que dizem os nossos clientes</h2>

  <div className="relative w-full overflow-hidden">
    <div id="carrossel" className="flex gap-8 animate-scrollLoop scroll-smooth">
      {[
        { nome: "Carlos Mendes", texto: "Serviço excelente! Noto diferença na conta da luz.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { nome: "Ana Silva", texto: "Profissionais impecáveis e muito simpáticos!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { nome: "Rui Ferreira", texto: "Recomendo totalmente. Serviço rápido e de qualidade.", img: "https://randomuser.me/api/portraits/men/28.jpg" },
        { nome: "Patrícia Lopes", texto: "Serviço impecável! A minha casa ficou a respirar melhor.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        { nome: "João Pereira", texto: "Excelente atendimento e resultados visíveis no desempenho do AC.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
        { nome: "Marta Gomes", texto: "A equipa foi pontual, rápida e muito cuidadosa. 5 estrelas!", img: "https://randomuser.me/api/portraits/women/21.jpg" },
        { nome: "Tiago Nunes", texto: "Já contratei a TEMPERIS duas vezes — recomendo vivamente!", img: "https://randomuser.me/api/portraits/men/56.jpg" },
        { nome: "Sara Barros", texto: "O ar da casa ficou realmente mais limpo. Obrigada!", img: "https://randomuser.me/api/portraits/women/77.jpg" },
        { nome: "Hugo Vieira", texto: "Rápidos, profissionais e simpáticos. Voltarei a chamar!", img: "https://randomuser.me/api/portraits/men/14.jpg" },
        { nome: "Beatriz Fernandes", texto: "Qualidade de topo! Adoro o vosso profissionalismo.", img: "https://randomuser.me/api/portraits/women/41.jpg" },
      ]
        // duplica para loop infinito, mantendo a mesma ordem
        .concat([
          { nome: "Carlos Mendes", texto: "Serviço excelente! Noto diferença na conta da luz.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { nome: "Ana Silva", texto: "Profissionais impecáveis e muito simpáticos!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { nome: "Rui Ferreira", texto: "Recomendo totalmente. Serviço rápido e de qualidade.", img: "https://randomuser.me/api/portraits/men/28.jpg" },
          { nome: "Patrícia Lopes", texto: "Serviço impecável! A minha casa ficou a respirar melhor.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
          { nome: "João Pereira", texto: "Excelente atendimento e resultados visíveis no desempenho do AC.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
          { nome: "Marta Gomes", texto: "A equipa foi pontual, rápida e muito cuidadosa. 5 estrelas!", img: "https://randomuser.me/api/portraits/women/21.jpg" },
          { nome: "Tiago Nunes", texto: "Já contratei a TEMPERIS duas vezes — recomendo vivamente!", img: "https://randomuser.me/api/portraits/men/56.jpg" },
          { nome: "Sara Barros", texto: "O ar da casa ficou realmente mais limpo. Obrigada!", img: "https://randomuser.me/api/portraits/women/77.jpg" },
          { nome: "Hugo Vieira", texto: "Rápidos, profissionais e simpáticos. Voltarei a chamar!", img: "https://randomuser.me/api/portraits/men/14.jpg" },
          { nome: "Beatriz Fernandes", texto: "Qualidade de topo! Adoro o vosso profissionalismo.", img: "https://randomuser.me/api/portraits/women/41.jpg" },
        ])
        .map((c, i) => (
          <div
            key={i}
            id={`testemunho-${i}`}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center w-[300px] min-w-[300px]"
          >
            <img
              src={c.img}
              alt={c.nome}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">"{c.texto}"</p>
            <h4
  className="font-semibold"
  style={{ color: '#24799bff' }}
>
  {c.nome}
</h4>

          </div>
        ))}
    </div>
  </div>

  {/* Pontinhos interativos */}
  <div className="flex gap-2 justify-center mt-10 relative z-10">
    {[...Array(10)].map((_, i) => (
      <button
        key={i}
        onClick={() => {
          const target = document.getElementById(`testemunho-${i}`);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        }}
        className="w-3 h-3 rounded-full bg-blue-200 hover:bg-blue-400 transition-all focus:outline-none"
      ></button>
    ))}
  </div>
</section>








      {/* CONTACTOS */}
      <section id="contactos" className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Contactos</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* WhatsApp */}
          <a
            href="https://wa.me/351969337121"
            target="_blank"
            rel="noreferrer"
            className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="Abrir WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:temperisavac@gmail.com"
            className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="Enviar Email"
          >
            <img src={gmailIcon} alt="Gmail" className="h-7 w-7" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/temperisavac"
            target="_blank"
            rel="noreferrer"
            className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="Ver Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="h-7 w-7 rounded-md" />
          </a>
        </div>
      </section>

      {/* BALÕES FLUTUANTES */}
      <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-50 animate-fade-in">
        {/* WhatsApp */}
        <a
          href="https://wa.me/351969337121"
          target="_blank"
          rel="noreferrer"
          className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          title="Abrir WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:temperisavac@gmail.com"
          className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          title="Enviar Email"
        >
          <img src={gmailIcon} alt="Gmail" className="h-7 w-7" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/temperisavac"
          target="_blank"
          rel="noreferrer"
          className="balloon bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          title="Ver Instagram"
        >
          <img src={instagramIcon} alt="Instagram" className="h-7 w-7 rounded-md" />
        </a>
      </div>

      {/* OVERLAY CALENDLY */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn z-50"
          onClick={() => {
            setShowOverlay(false);
            if (window.Calendly) window.Calendly.closePopupWidget();
          }}
        />
      )}
 {/* RODAPÉ AJUSTADO */}
<footer className="w-full text-right pr-6 pb-2 mt-8">
  <p className="text-xs text-black tracking-wide">
    © 2025 TEMPERIS. Todos os direitos reservados.
  </p>
</footer>


    </div>
  );
}
