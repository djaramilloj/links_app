export interface LinkInput {
  url: string;
  name: string;
}

export interface Link extends LinkInput {
  id: number;
  createdAt: string;
}