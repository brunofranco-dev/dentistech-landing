import { useState } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Gauge,
  MapPin,
  MessageCircle,
  RadioTower,
  Search,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeadFormData {
  name: string;
  whatsapp: string;
  profile: string;
  city: string;
  equipment: string;
}

const painCards = [
  "Mensagem em grupo perguntando se alguém indica técnico",
  "Técnico que visualiza e não responde",
  "Paciente esperando e cadeira parada",
  "Orçamento perdido por falta de manutenção",
  "Informação espalhada no WhatsApp",
];

const clinicBenefits = [
  "Encontre técnicos com mais rapidez",
  "Reduza tempo de equipamento parado",
  "Organize solicitações de manutenção",
  "Pare de depender só de indicação informal",
  "Tenha mais previsibilidade na rotina da clínica",
];

const technicianBenefits = [
  "Receba oportunidades de atendimento",
  "Seja encontrado por clínicas da sua região",
  "Organize melhor sua demanda",
  "Ganhe visibilidade no mercado odontológico",
  "Faça parte da primeira rede focada nesse segmento",
];

const faqs = [
  {
    question: "A DentisTech já está funcionando?",
    answer:
      "Sim. A DentisTech está em lançamento inicial em Uberlândia, conectando clínicas e técnicos enquanto a rede local ganha densidade.",
  },
  {
    question: "O cadastro é gratuito?",
    answer:
      "Sim. O cadastro inicial para clínicas e técnicos é gratuito durante a fase de lançamento.",
  },
  {
    question: "É só para Uberlândia?",
    answer:
      "O início é por Uberlândia para garantir operação próxima e bem acompanhada. A expansão para outras cidades está no plano.",
  },
  {
    question: "Como funciona para clínicas?",
    answer:
      "A clínica informa o problema, o tipo de equipamento e a localização. A DentisTech ajuda a organizar a solicitação e conectar com técnicos disponíveis.",
  },
  {
    question: "Como funciona para técnicos?",
    answer:
      "O técnico se cadastra para receber oportunidades de atendimento compatíveis com sua região e atuação no mercado odontológico.",
  },
  {
    question: "A DentisTech faz manutenção diretamente?",
    answer:
      "A DentisTech é uma plataforma conectora. Ela organiza a solicitação e facilita o contato entre clínicas e técnicos, mas não executa diretamente todos os serviços técnicos.",
  },
  {
    question: "Quem é responsável pelo atendimento técnico?",
    answer:
      "O atendimento é feito pelo técnico conectado à solicitação. A DentisTech atua para tornar o processo mais claro, rastreável e organizado.",
  },
];

const productEvents = [
  { label: "Chamado aberto", detail: "Cadeira odontológica sem acionamento", status: "Agora" },
  { label: "Região", detail: "Uberlândia - MG", status: "3,2 km" },
  { label: "Técnico", detail: "Disponível para triagem", status: "Online" },
  { label: "Histórico", detail: "Última manutenção registrada há 7 meses", status: "OK" },
];

export default function Home() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    whatsapp: "",
    profile: "",
    city: "Uberlândia",
    equipment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const chooseProfile = (profile: string) => {
    setFormData((prev) => ({ ...prev, profile }));
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("whatsapp", formData.whatsapp);
      formDataToSend.append("specialty", formData.profile);
      formDataToSend.append("profile", formData.profile);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("equipment", formData.equipment);
      formDataToSend.append("source", "site-lancamento-dentistech");

      const response = await fetch("https://formspree.io/f/mqegakvd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Cadastro recebido. Vamos chamar você no WhatsApp.");

        const message = `Olá, sou ${formData.name}, meu perfil é ${formData.profile} e quero entrar na DentisTech.`;
        const encodedMessage = encodeURIComponent(message);

        setTimeout(() => {
          window.location.href = `https://wa.me/5534996848841?text=${encodedMessage}`;
        }, 1800);
      } else {
        toast.error("Não foi possível enviar agora. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="launch-page">
      <header className="launch-header">
        <div className="launch-container launch-header__inner">
          <a className="launch-brand" href="#top" aria-label="DentisTech">
            <img src="/LOGO_DENTISTECH.png" alt="DentisTech" className="launch-logo" />
            <span>DentisTech</span>
          </a>
          <nav className="launch-nav" aria-label="Navegação principal">
            <a href="#clinicas">Clínicas</a>
            <a href="#tecnicos">Técnicos</a>
            <a href="#produto">Produto</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Button className="launch-header__cta" onClick={() => chooseProfile("Clínica odontológica")}>
            Entrar
          </Button>
        </div>
      </header>

      <section id="top" className="launch-hero">
        <div className="launch-grid" aria-hidden="true" />
        <div className="launch-container launch-hero__inner">
          <div className="launch-hero__copy">
            <div className="launch-eyebrow">
              <RadioTower size={16} />
              Lançamento inicial em Uberlândia
            </div>
            <h1>Manutenção odontológica sem depender da sorte.</h1>
            <p>
              A DentisTech conecta sua clínica a técnicos de manutenção de equipamentos
              odontológicos, de forma rápida, organizada e pensada para a rotina real do
              consultório.
            </p>
            <div className="launch-actions">
              <Button className="launch-button launch-button--primary" size="lg" onClick={() => chooseProfile("Clínica odontológica")}>
                Entrar na DentisTech
                <ArrowRight size={18} />
              </Button>
              <Button className="launch-button launch-button--ghost" size="lg" onClick={() => chooseProfile("Técnico de manutenção")}>
                Sou técnico
              </Button>
            </div>
            <div className="launch-trust-row">
              <span><ShieldCheck size={16} /> Plataforma conectora</span>
              <span><Clock3 size={16} /> Solicitação organizada</span>
              <span><MapPin size={16} /> Início local</span>
            </div>
          </div>

          <div className="product-shell launch-hero__product" aria-label="Prévia visual da plataforma DentisTech">
            <div className="product-shell__topbar">
              <span />
              <span />
              <span />
              <strong>Chamado #DT-0148</strong>
            </div>
            <div className="product-alert">
              <div>
                <small>Status do atendimento</small>
                <strong>Triagem em andamento</strong>
              </div>
              <span>12 min</span>
            </div>
            <div className="product-panel">
              <div className="product-panel__header">
                <Wrench size={18} />
                <span>Equipamento</span>
              </div>
              <h3>Cadeira odontológica</h3>
              <p>Não sobe, paciente agendado para 14h30.</p>
              <div className="product-metrics">
                <span><Zap size={15} /> Urgente</span>
                <span><MapPin size={15} /> Centro</span>
              </div>
            </div>
            <div className="product-timeline">
              {productEvents.map((item) => (
                <div className="product-event" key={item.label}>
                  <span className="product-event__dot" />
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
                  </div>
                  <em>{item.status}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="launch-section pain-section">
        <div className="launch-container">
          <div className="section-heading section-heading--center">
            <span>Rotina real</span>
            <h2>Seu equipamento parou. Agora começa o caos.</h2>
            <p>Quando a manutenção depende de improviso, a clínica perde tempo justamente quando precisa de clareza.</p>
          </div>
          <div className="pain-grid">
            {painCards.map((item) => (
              <article className="glass-card pain-card" key={item}>
                <MessageCircle size={20} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="launch-section solution-section">
        <div className="launch-container">
          <div className="section-heading">
            <span>Processo claro</span>
            <h2>A DentisTech organiza esse processo.</h2>
            <p>Uma solicitação mais completa ajuda a clínica a sair do desespero e ajuda o técnico a entender melhor o cenário antes do atendimento.</p>
          </div>
          <div className="flow-board">
            {[
              ["1", "A clínica solicita atendimento", "Problema, equipamento, localização e urgência entram em um fluxo organizado."],
              ["2", "Conectamos com técnico disponível", "A rede recebe oportunidades mais claras, com contexto e prioridade."],
              ["3", "O problema fica mais rastreável", "Status, histórico e contato passam a ter um lugar certo."],
            ].map(([number, title, text]) => (
              <article className="flow-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clinicas" className="launch-section audience-section">
        <div className="launch-container audience-grid">
          <div className="audience-copy">
            <span className="section-kicker">Para clínicas odontológicas</span>
            <h2>Menos equipamento parado. Mais rotina sob controle.</h2>
            <p>Abra uma solicitação com contexto, reduza conversas soltas e ganhe mais previsibilidade na hora de buscar manutenção.</p>
            <Button className="launch-button launch-button--primary" onClick={() => chooseProfile("Clínica odontológica")}>
              Quero cadastrar minha clínica
              <ArrowRight size={18} />
            </Button>
          </div>
          <div className="benefit-list">
            {clinicBenefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <CheckCircle2 size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnicos" className="launch-section audience-section audience-section--alt">
        <div className="launch-container audience-grid audience-grid--reverse">
          <div className="audience-copy">
            <span className="section-kicker">Para técnicos de manutenção</span>
            <h2>Seja encontrado por clínicas que precisam resolver.</h2>
            <p>Apareça em uma rede focada em manutenção odontológica e receba demandas com informações mais objetivas.</p>
            <Button className="launch-button launch-button--secondary" onClick={() => chooseProfile("Técnico de manutenção")}>
              Quero me cadastrar como técnico
              <ArrowRight size={18} />
            </Button>
          </div>
          <div className="benefit-list benefit-list--cyan">
            {technicianBenefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <CheckCircle2 size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produto" className="launch-section product-section">
        <div className="launch-container product-grid">
          <div className="section-heading">
            <span>Produto em construção real</span>
            <h2>Uma experiência com cara de plataforma, não de lista de contatos.</h2>
            <p>O objetivo é dar contexto para o atendimento: equipamento, urgência, região, status, técnico e histórico no mesmo fluxo.</p>
          </div>
          <div className="dashboard-mock">
            <div className="dashboard-sidebar">
              <strong>DentisTech</strong>
              <span className="active"><ClipboardList size={16} /> Chamados</span>
              <span><Users size={16} /> Técnicos</span>
              <span><Activity size={16} /> Histórico</span>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-search"><Search size={16} /> Buscar por equipamento, região ou status</div>
              <div className="ticket-card ticket-card--active"><div><strong>Autoclave</strong><p>Erro de ciclo e vazamento leve</p></div><span>Aberto</span></div>
              <div className="ticket-card"><div><strong>Sugador</strong><p>Baixa pressão durante atendimento</p></div><span>Triagem</span></div>
              <div className="ticket-card"><div><strong>Ultrassom</strong><p>Sem potência na ponta</p></div><span>Histórico</span></div>
            </div>
            <div className="dashboard-inspector">
              <Gauge size={24} />
              <strong>Atendimento designado</strong>
              <p>Técnico próximo com disponibilidade para avaliação no período da tarde.</p>
              <div className="rating-line"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="launch-section milestone-section">
        <div className="launch-container">
          <div className="milestone-card">
            <div>
              <span className="section-kicker">Lançamento</span>
              <h2>Estamos no ar.</h2>
              <p>A DentisTech começa por Uberlândia com uma missão simples: tirar a manutenção odontológica do improviso.</p>
            </div>
            <div className="milestone-list">
              {["Lançamento inicial", "Primeiras clínicas cadastradas", "Rede de técnicos em formação", "Expansão em breve"].map((item) => (
                <span key={item}><Sparkles size={16} /> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="form-section" className="launch-section form-section">
        <div className="launch-container form-grid">
          <div className="section-heading">
            <span>Entrar na rede</span>
            <h2>Cadastre sua clínica ou seu serviço técnico.</h2>
            <p>Você será chamado no WhatsApp para os próximos passos do lançamento. Sem spam, sem promessa solta.</p>
          </div>

          {submitted ? (
            <div className="form-success">
              <CheckCircle2 size={44} />
              <h3>Cadastro recebido.</h3>
              <p>Vamos chamar você no WhatsApp com as informações do lançamento da DentisTech.</p>
            </div>
          ) : (
            <form className="lead-form" onSubmit={handleSubmit}>
              <label>Nome completo<Input name="name" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} required /></label>
              <label>WhatsApp<Input name="whatsapp" type="tel" placeholder="(34) 99999-9999" value={formData.whatsapp} onChange={handleChange} required /></label>
              <label>
                Perfil
                <select name="profile" value={formData.profile} onChange={handleChange} required>
                  <option value="">Selecione uma opção</option>
                  <option value="Clínica odontológica">Clínica odontológica</option>
                  <option value="Dentista">Dentista</option>
                  <option value="Técnico de manutenção">Técnico de manutenção</option>
                  <option value="Outro">Outro</option>
                </select>
              </label>
              <label>Cidade<Input name="city" type="text" value={formData.city} onChange={handleChange} required /></label>
              <label className="lead-form__full">Equipamento ou atuação principal<Input name="equipment" type="text" placeholder="Ex.: cadeira, compressor, autoclave, técnico geral" value={formData.equipment} onChange={handleChange} /></label>
              <div className="form-note lead-form__full"><TimerReset size={16} /> Usaremos seus dados apenas para contato sobre o lançamento e entrada na rede DentisTech.</div>
              <Button type="submit" className="launch-button launch-button--primary lead-form__full" disabled={loading}>
                {loading ? "Enviando..." : "Enviar cadastro"}
                {!loading && <ArrowRight size={18} />}
              </Button>
            </form>
          )}
        </div>
      </section>

      <section id="faq" className="launch-section faq-section">
        <div className="launch-container faq-grid">
          <div className="section-heading">
            <span>FAQ</span>
            <h2>Perguntas diretas sobre a DentisTech.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="launch-container final-cta__inner">
          <h2>Pare de procurar técnico no desespero.</h2>
          <p>Cadastre sua clínica ou seu serviço técnico e participe do lançamento da DentisTech.</p>
          <div className="launch-actions launch-actions--center">
            <Button className="launch-button launch-button--primary" onClick={() => chooseProfile("Clínica odontológica")}>Cadastrar clínica</Button>
            <Button className="launch-button launch-button--ghost" onClick={() => chooseProfile("Técnico de manutenção")}>Cadastrar técnico</Button>
          </div>
        </div>
      </section>

      <footer className="launch-footer">
        <div className="launch-container launch-footer__inner">
          <span>© 2026 DentisTech. Técnicos para Dentistas.</span>
          <span>Plataforma conectora de clínicas odontológicas e técnicos de manutenção.</span>
        </div>
      </footer>
    </main>
  );
}
