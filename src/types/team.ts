import { User } from "./user";

export type Team = {
  id: number;
  name: string;
  members: User[];
  displayOrder?: number;
  createdUser: User;
  created: Date;
  updatedUser: User;
  updated: Date;
};
