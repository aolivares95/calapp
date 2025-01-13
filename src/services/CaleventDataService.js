import http from "../http-common";

class CaleventDataService {
  findAll() {
    return http.get("/calevent");
  }

  get(uuid) {
    return http.get(`/calevent/${uuid}`);
  }

  create(data) {
    return http.post("/calevent", data);
  }

  update(uuid, data) {
    return http.put(`/calevent/${uuid}`, data);
  }

  delete(uuid) {
    return http.delete(`/calevent/${uuid}`);
  }

  deleteAll() {
    return http.delete(`/calevent`);
  }

  findByTitle(title) {
    return http.get(`/calevent?title=${title}`);
  }
}

export default new CaleventDataService();
