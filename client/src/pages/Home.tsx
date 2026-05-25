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
