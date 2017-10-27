const axios = require("axios");
const qs = require("querystring");

class Backlog {
  constructor(options = {}) {
    this.client = axios.create({
      baseURL: `https://${options.spaceKey || ""}.backlog.jp`,
      params: { apiKey: options.apiKey }
    });
  }

  projects(all = false, archived = false) {
    return this.client
      .get("/api/v2/projects", { params: { all, archived } })
      .then(res => res.data);
  }
  projectUsers(id) {
    return this.client
      .get(`/api/v2/projects/${id}/users`)
      .then(res => res.data);
  }
}

module.exports = Backlog;
