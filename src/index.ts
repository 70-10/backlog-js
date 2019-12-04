import axios from "axios";
import { Space } from "./types/space";
import { User } from "./types/user";
import { Team } from "./types/team";
import { Project } from "./types/project";

export function create(spaceKey: string, apiKey: string) {
  const client = axios.create({ baseURL: `https://${spaceKey}.backlog.jp/api/v2` });

  return {
    async space() {
      const res = await client.get<Space>("/space", { params: { apiKey } });
      return res.data;
    },

    async users() {
      const res = await client.get<User[]>("/users", { params: { apiKey } });
      return res.data;
    },

    async teams() {
      const res = await client.get<Team[]>("/teams", { params: { apiKey } });
      return res.data;
    },

    async projects(all: boolean = false, archived: boolean = false) {
      const res = await client.get<Project[]>("/projects", { params: { all, archived, apiKey } });
      return res.data;
    },

    async projectUsers(projectIdOrKey: number | string) {
      const res = await client.get<Project>(`/projects/${projectIdOrKey}/users`, { params: { apiKey } });
      return res.data;
    },

    async deleteUserFromProject(projectIdOrKey: number | string, userId: number) {
      const res = await client.delete<User>(`/projects/${projectIdOrKey}/users`, {
        data: { userId },
        params: { apiKey }
      });
      return res.data;
    }
  };
}
