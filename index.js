const axios = require("axios");
const qs = require("querystring");

class Backlog {
  constructor(options = {}) {
    this.client = axios.create({
      baseURL: `https://${options.spaceKey || ""}.backlog.jp/api/v2`,
      params: { apiKey: options.apiKey }
    });
  }

  projects(all = false, archived = false) {
    return this.client
      .get("/projects", { params: { all, archived } })
      .then(res => res.data);
  }
  projectUsers(id) {
    return this.client.get(`/projects/${id}/users`).then(res => res.data);
  }
}

module.exports = Backlog;
