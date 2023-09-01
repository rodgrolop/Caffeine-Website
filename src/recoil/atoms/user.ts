import { atom } from "recoil";

const USER_KEY = "user";

export type userAtomProps = {
  authenticated: boolean;
  jwt?: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    createdAt?: string;
    email: string;
    id: string;
    provider?: string;
    updatedAt?: string;
    role?: string | null;
    username: string;
    blog_likes: string[];
  };
};

export const userAtom = atom<userAtomProps | null>({
  key: USER_KEY,
  default: null,
});
