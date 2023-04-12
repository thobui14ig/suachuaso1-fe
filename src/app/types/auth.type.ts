import { UserInfoType } from "./user.type";

export interface ResponseLogin {
  refreshToken: string;
  accessToken: string;
  user: UserInfoType;
}

