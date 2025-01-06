import { AppDataSource } from "./data-source";
import { Calevent } from "./entity/Calevent";

export const calRepository = AppDataSource.getRepository(Calevent);
