export type loginInputProps = {
  identifier: string;
  password: string;
};

export type userFetchErrorProps = {
  message?: string;
  name?: string;
  path?: string[];
};

export type userQueryErrorProps = {
  errors: userFetchErrorProps[];
  message?: string;
} | null;

export type getMeQueryDataProps = {
  me: {
    blocked: boolean;
    blog_likes: { data: { id: string }[] };
    confirmed: boolean;
    email: string;
    id: string;
    username: string;
  };
};

export type loginResponseProps = {
  login: {
    jwt: string;
    user: {
      blocked: boolean;
      confirmed: boolean;
      createdAt?: string;
      email: string;
      id: string;
      provider: string;
      updatedAt: string;
      username: string;
      blog_likes: { data: { id: string }[] };
    };
  };
};

export type providerUserQueryProps = {
  jwt: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    createdAt?: string;
    email: string;
    id: string;
    provider: string;
    updatedAt: string;
    username: string;
  };
  data?: null;
  error?: {
    message: string;
    name: string;
    status: number;
  };
};
