import { CREATE_BY } from ".";

export interface CHAT {
    _id: string;
    users: string[];
    type: string;
    messages: MESSAGE[];
  }

export interface MESSAGE{
    _id: string;
    content: string;
    createdBy: CREATE_BY;
    type: string;
    createdAt: Date;
}