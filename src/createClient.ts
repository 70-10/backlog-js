import axios from "axios";
import { Space } from "./types/space";
import { User } from "./types/user";
import { Team } from "./types/team";
import { Project } from "./types/project";

export function createClient(spaceKey: string, apiKey: string) {
  const client = axios.create({ baseURL: `https://${spaceKey}.backlog.jp/api/v2` });

  return {
    async getSpace() {
      const res = await client.get<Space>("/space", { params: { apiKey } });
      return res.data;
    },

    async getUsers() {
      const res = await client.get<User[]>("/users", { params: { apiKey } });
      return res.data;
    },

    async getTeams() {
      const res = await client.get<Team[]>("/teams", { params: { apiKey } });
      return res.data;
    },

    async getProjects(all: boolean = false, archived: boolean = false) {
      const res = await client.get<Project[]>("/projects", { params: { all, archived, apiKey } });
      return res.data;
    },

    async getProjectUsers(projectIdOrKey: number | string) {
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
