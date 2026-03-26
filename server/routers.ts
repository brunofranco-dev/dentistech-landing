import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, getAllLeads } from "./db";
import { z } from "zod";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Nome é obrigatório"),
          whatsapp: z.string().min(1, "WhatsApp é obrigatório"),
          specialty: z.string().min(1, "Especialidade é obrigatória"),
          city: z.string().default("Uberlândia"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createLead(input);
          return { success: true, message: "Lead criado com sucesso" };
        } catch (error) {
          console.error("Erro ao criar lead:", error);
          throw new Error("Falha ao criar lead");
        }
      }),
    list: publicProcedure.query(async () => {
      try {
        const allLeads = await getAllLeads();
        return allLeads;
      } catch (error) {
        console.error("Erro ao listar leads:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
