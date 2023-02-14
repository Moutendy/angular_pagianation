import { Users } from "./users";

export interface Page<Users> {

  content: Users[];
  totalElements: number;
  totalPages: number;
}
