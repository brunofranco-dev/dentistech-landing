import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Users, Zap, Clock } from "lucide-react";
import { toast } from "sonner";

/**
 * DentisTech Landing Page - Captura de Leads
 * Design: Minimalismo Corporativo Moderno
 * Paleta: Azul marinho (#191964), Azul médio (#004B96), Verde-água (#32C8AF), Ciano (#00AFC8), Branco (#F8F8F8)
 * Tipografia: Poppins (headlines), Inter (body)
 */

interface FormData {
  name: string;
  whatsapp: string;
  specialty: string;
  city: string;
}

export default function Home() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    specialty: "",
    city: "Uberlândia",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("whatsapp", formData.whatsapp);
    formDataToSend.append("specialty", formData.specialty);
    formDataToSend.append("city", formData.city);

    await fetch("https://formspree.io/f/mqegakvd", {
  method: "POST",
  headers: {
    "Accept": "application/json"
  },
  body: formDataToSend,
});

    setSubmitted(true);
    toast.success("Cadastro realizado! Te chamaremos no WhatsApp.");
    if (response.ok) {
  setSubmitted(true);
  toast.success("Cadastro realizado! Te chamaremos no WhatsApp.");

  setTimeout(() => {
    window.location.href = "https://wa.me/5534996848841";
  }, 1500);
}

  } catch (error) {
    console.error(error);
    toast.error("Erro ao enviar. Tente novamente.");
  } finally {
    setLoading(false);
  }
    
};
  

  return (
    <div className="min-h-screen bg-white" style={{ backgroundColor: "#F8F8F8" }}>
      {/* Header */}
      <header className="border-b border-gray-200 py-6 sticky top-0 z-50 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#191964" }}
              >
                D
              </div>
              <span
                className="font-bold text-xl"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                DentisTech
              </span>
            </div>
            <p className="text-sm text-gray-600">Acesso Antecipado - Uberlândia</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Copy */}
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Seu consultório não pode parar por falta de técnico.
              </h1>
              <p
                className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{ color: "#666666" }}
              >
                Com a DentisTech, você abre um chamado e um técnico certificado vai até seu
                consultório. Simples, rápido e sem dor de cabeça.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="font-semibold"
                  style={{ backgroundColor: "#004B96" }}
                  onClick={() =>
                    document
                      .getElementById("form-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Quero Acesso Antecipado
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031488074/4QG7SWJmPZkPrRrfN3bH6W/dentistech-hero-bg-FQgk7PyKq6DwUq2n28ANRb.webp"
                alt="Técnico certificado trabalhando em equipamento odontológico"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{ backgroundColor: "#E8E8F0" }}
      ></div>

      {/* Autoridade - Fundador */}
      <section className="py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031488074/4QG7SWJmPZkPrRrfN3bH6W/dentistech-technician-hero-3wRbqdSDFzsyFj7mNoW9qG.webp"
                alt="Dr. Cleber, fundador da DentisTech"
                className="w-full max-w-sm mx-auto rounded-lg"
              />
            </div>

            {/* Right - Copy */}
            <div className="order-1 md:order-2">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Criado por um dentista que já passou por esse problema.
              </h2>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "#666666" }}
              >
                A DentisTech nasceu da frustração. Quantas vezes você precisou de um técnico
                urgente e não conseguiu? Quantas vezes esperou horas por um atendimento que
                não chegou? Ou pior: recebeu um serviço mal feito que criou mais problemas?
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#666666" }}
              >
                Agora existe uma solução. Uma plataforma feita por dentista para dentista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{ backgroundColor: "#E8E8F0" }}
      ></div>

      {/* Como Funciona */}
      <section className="py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
          >
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl"
                style={{ backgroundColor: "#004B96" }}
              >
                1
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Você abre o chamado no app
              </h3>
              <p style={{ color: "#666666" }}>
                Descreve o problema, anexa fotos se necessário. Leva 2 minutos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl"
                style={{ backgroundColor: "#00AFC8" }}
              >
                2
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Técnicos próximos recebem
              </h3>
              <p style={{ color: "#666666" }}>
                Apenas técnicos certificados e com boa reputação veem seu chamado.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl"
                style={{ backgroundColor: "#32C8AF" }}
              >
                3
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Técnico certificado vai até você
              </h3>
              <p style={{ color: "#666666" }}>
                Você acompanha em tempo real. Sem surpresa. Sem gambiarra.
              </p>
            </div>
          </div>

          {/* Process Illustration */}
          <div className="mt-16">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031488074/4QG7SWJmPZkPrRrfN3bH6W/dentistech-process-illustration-WBVZ8MsLDTwxtEtkBWbinc.webp"
              alt="Processo de 3 passos da DentisTech"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{ backgroundColor: "#E8E8F0" }}
      ></div>

      {/* Diferenciais */}
      <section className="py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
          >
            Por que escolher DentisTech?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diferencial 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2
                  size={28}
                  style={{ color: "#32C8AF" }}
                  className="mt-1"
                />
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
                >
                  Técnicos Certificados
                </h3>
                <p style={{ color: "#666666" }}>
                  Todos os técnicos passam por verificação rigorosa. Você sabe quem está
                  mexendo no seu equipamento.
                </p>
              </div>
            </div>

            {/* Diferencial 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Zap
                  size={28}
                  style={{ color: "#32C8AF" }}
                  className="mt-1"
                />
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
                >
                  Sem Gambiarra
                </h3>
                <p style={{ color: "#666666" }}>
                  Serviço feito certo, da primeira vez. Sem soluções improvisadas que criam
                  mais problemas.
                </p>
              </div>
            </div>

            {/* Diferencial 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock
                  size={28}
                  style={{ color: "#32C8AF" }}
                  className="mt-1"
                />
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
                >
                  Sem Surpresa no Atendimento
                </h3>
                <p style={{ color: "#666666" }}>
                  Você sabe quanto vai custar antes do técnico chegar. Sem cobranças extras
                  inesperadas.
                </p>
              </div>
            </div>

            {/* Diferencial 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users
                  size={28}
                  style={{ color: "#32C8AF" }}
                  className="mt-1"
                />
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
                >
                  Histórico dos Serviços
                </h3>
                <p style={{ color: "#666666" }}>
                  Todos os atendimentos ficam registrados. Você tem controle total do
                  histórico de manutenção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{ backgroundColor: "#E8E8F0" }}
      ></div>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div
            className="rounded-lg p-8 md:p-16 text-center"
            style={{ backgroundColor: "#191964" }}
          >
            <h2
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Uberlândia será a primeira cidade.
            </h2>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              As vagas para o beta são limitadas. Quem se cadastrar primeiro terá prioridade
              absoluta no acesso.
            </p>
            <Button
              size="lg"
              className="font-semibold"
              style={{ backgroundColor: "#32C8AF", color: "#191964" }}
              onClick={() =>
                document
                  .getElementById("form-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reservar Meu Acesso Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-12 md:py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4"
            style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
          >
            Quero Acesso Antecipado
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
            Preencha o formulário abaixo. Você será contatado em breve.
          </p>

          {submitted ? (
            <div
              className="rounded-lg p-8 md:p-12 text-center border-2"
              style={{ borderColor: "#32C8AF", backgroundColor: "#F8F8F8" }}
            >
              <CheckCircle2
                size={48}
                style={{ color: "#32C8AF" }}
                className="mx-auto mb-4"
              />
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: "#191964", fontFamily: "Poppins, sans-serif" }}
              >
                Cadastro Confirmado!
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Obrigado por se cadastrar. Você receberá um WhatsApp em breve com mais
                informações sobre o acesso ao beta.
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Fique atento! Você está entre os primeiros a ter acesso à DentisTech.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6 md:p-12"
            >
              {/* Nome */}
              <div className="mb-5 md:mb-6">
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-semibold mb-2"
                  style={{ color: "#191964" }}
                >
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-sm"
                />
              </div>

              {/* WhatsApp */}
              <div className="mb-5 md:mb-6">
                <label
                  htmlFor="whatsapp"
                  className="block text-xs md:text-sm font-semibold mb-2"
                  style={{ color: "#191964" }}
                >
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(34) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Usaremos esse número para entrar em contato com você.
                </p>
              </div>

              {/* Especialidade */}
              <div className="mb-5 md:mb-6">
                <label
                  htmlFor="specialty"
                  className="block text-xs md:text-sm font-semibold mb-2"
                  style={{ color: "#191964" }}
                >
                  Sua Especialidade *
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-sm"
                  style={{ "--tw-ring-color": "#00AFC8" } as any}
                >
                  <option value="">Selecione sua especialidade</option>
                  <option value="geral">Clínico Geral</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="implantologia">Implantologia</option>
                  <option value="endodontia">Endodontia</option>
                  <option value="periodontia">Periodontia</option>
                  <option value="protese">Prótese</option>
                  <option value="cirurgia">Cirurgia Oral</option>
                  <option value="outra">Outra</option>
                </select>
              </div>

              {/* Cidade */}
              <div className="mb-6 md:mb-8">
                <label
                  htmlFor="city"
                  className="block text-xs md:text-sm font-semibold mb-2"
                  style={{ color: "#191964" }}
                >
                  Cidade *
                </label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  disabled
                  className="w-full bg-gray-100 text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Por enquanto, estamos focados em Uberlândia. Em breve, expandiremos para
                  outras cidades.
                </p>
              </div>

              {/* Microcopy */}
              <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-lg" style={{ backgroundColor: "#F8F8F8" }}>
                <p className="text-xs text-gray-600">
                  ✓ Seu contato não será spam. Usaremos apenas para informar sobre o acesso
                  ao beta.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  ✓ Quem se cadastrar primeiro terá prioridade absoluta no acesso.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold"
                style={{ backgroundColor: "#004B96" }}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Entrar no Beta"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-gray-200 py-6 md:py-8"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-gray-600">
            © 2026 DentisTech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Desenvolvido com ❤️ para dentistas.
          </p>
        </div>
      </footer>
    </div>
  );
}
