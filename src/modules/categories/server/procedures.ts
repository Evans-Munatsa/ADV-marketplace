import { baseProcedure, createTRPCRouter } from "@/trcp/init";

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async () => {
        return [{hello: "world"}];
    })
})