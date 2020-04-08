import { Router, RouterContext } from "oak";
import {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact
} from "./handlers/clientes/contacto.ts";
import {
  getSector,
  getSectors,
  createSector,
  updateSector,
  deleteSector
} from "./handlers/clientes/sector.ts";
import {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient
} from "./handlers/clientes/cliente.ts";
import {
  getCountries,
  getCountry,
  searchCountry
} from "./handlers/maestro/pais.ts";

const main_router = new Router();

// TODO Should be wrapped inside api_router
// It should be called inside main router
main_router
  .get("/api/clientes/contacto", getContacts)
  .post("/api/clientes/contacto", createContact)
  .get<{ id: string }>("/api/clientes/contacto/:id", getContact)
  .put<{ id: string }>("/api/clientes/contacto/:id", updateContact)
  .delete<{ id: string }>("/api/clientes/contacto/:id", deleteContact);

main_router
  .get("/api/clientes/sector", getSectors)
  .post("/api/clientes/sector", createSector)
  .get<{ id: string }>("/api/clientes/sector/:id", getSector)
  .put<{ id: string }>("/api/clientes/sector/:id", updateSector)
  .delete<{ id: string }>("/api/clientes/sector/:id", deleteSector);

main_router
  .get("/api/clientes/cliente", getClients)
  .post("/api/clientes/cliente", createClient)
  .get<{ id: string }>("/api/clientes/cliente/:id", getClient)
  .put<{ id: string }>("/api/clientes/cliente/:id", updateClient)
  .delete<{ id: string }>("/api/clientes/cliente/:id", deleteClient);


main_router
  .get("/api/maestro/pais", getCountries)
  .get("/api/maestro/pais/search", searchCountry)
  .get<{ id: string }>("/api/maestro/pais/:id", getCountry);

export const routes = main_router.routes();
export const allowedMethods = main_router.allowedMethods();
