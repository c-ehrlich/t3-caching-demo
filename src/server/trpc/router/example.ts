import { t } from "../trpc";
import { z } from "zod";

export const exampleRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      await delay(1000);
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
});

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
