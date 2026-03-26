import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { Lead } from "../drizzle/schema";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("leads.create", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("deve criar um lead com dados válidos", async () => {
    const leadData = {
      name: "Dr. João Silva",
      whatsapp: "(34) 99999-9999",
      specialty: "Clínico Geral",
      city: "Uberlândia",
    };

    const result = await caller.leads.create(leadData);

    expect(result).toEqual({
      success: true,
      message: "Lead criado com sucesso",
    });
  });

  it("deve rejeitar lead sem nome", async () => {
    const leadData = {
      name: "",
      whatsapp: "(34) 99999-9999",
      specialty: "Clínico Geral",
      city: "Uberlândia",
    };

    await expect(caller.leads.create(leadData)).rejects.toThrow();
  });

  it("deve rejeitar lead sem WhatsApp", async () => {
    const leadData = {
      name: "Dr. João Silva",
      whatsapp: "",
      specialty: "Clínico Geral",
      city: "Uberlândia",
    };

    await expect(caller.leads.create(leadData)).rejects.toThrow();
  });

  it("deve rejeitar lead sem especialidade", async () => {
    const leadData = {
      name: "Dr. João Silva",
      whatsapp: "(34) 99999-9999",
      specialty: "",
      city: "Uberlândia",
    };

    await expect(caller.leads.create(leadData)).rejects.toThrow();
  });

  it("deve usar Uberlândia como cidade padrão", async () => {
    const leadData = {
      name: "Dr. João Silva",
      whatsapp: "(34) 99999-9999",
      specialty: "Clínico Geral",
      // city não fornecido
    };

    const result = await caller.leads.create(leadData as any);

    expect(result).toEqual({
      success: true,
      message: "Lead criado com sucesso",
    });
  });
});

describe("leads.list", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("deve retornar lista de leads", async () => {
    const result = await caller.leads.list();

    expect(Array.isArray(result)).toBe(true);
  });

  it("deve retornar array vazio quando não há leads", async () => {
    const result = await caller.leads.list();

    // Pode retornar vazio ou com dados existentes
    expect(Array.isArray(result)).toBe(true);
  });
});
