export interface UserAuth {
  userId: number;
  token: string;
}

export interface UserInfo {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  avatar: string;
}