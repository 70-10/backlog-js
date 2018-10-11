const axios = require("axios");

class Backlog {
  constructor(options = {}) {
    this.client = axios.create({
      baseURL: `https://${options.spaceKey || ""}.backlog.jp/api/v2`,
      params: { apiKey: options.apiKey },
    });
  }

  groups() {
    return this.client("/groups").then(res => res.data);
  }

  space() {
    return this.client("/space").then(res => res.data);
  }

  users() {
    return this.client("/users").then(res => res.data);
  }

  projects(all = false, archived = false) {
    return this.client.get("/projects", { params: { all, archived } }).then(res => res.data);
  }

  projectUsers(id) {
    return this.client.get(`/projects/${id}/users`).then(res => res.data);
  }

  deleteUserFromProject(userId, projectId) {
    return this.client({
      method: "delete",
      url: `/projects/${projectId}/users`,
      data: { userId },
    }).then(res => res.data);
  }
}

module.exports = Backlog;
