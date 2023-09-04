import type {
  getMeQueryDataProps,
  loginInputProps,
  loginResponseProps,
  userQueryErrorProps,
} from "./useAuthenticationProps";
import { userBloglikesTransformer } from "@utils";
import { useQuery, useMutation } from "@tanstack/react-query";
import { loginMutation } from "../mutations/login-mutation";
import { UserContextSetter } from "@context";
import { useContext } from "preact/hooks";
import { graphQLClient } from "../client/reactQueryClient";
import { getMeQuery } from "../queries/me-query";

export const useLogin = () => {
  const { setUser } = useContext(UserContextSetter);

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (loginInput: loginInputProps) => loginMutation(loginInput),
  });

  if (data) {
    const { login } = data as loginResponseProps;
    graphQLClient.setHeader(`authorization`, `Bearer ${login.jwt}`);
    localStorage.setItem("token", login.jwt);
    setUser({
      authenticated: true,
      jwt: login.jwt,
      user: {
        ...login.user,
        blog_likes: userBloglikesTransformer(login.user.blog_likes),
      },
    });
  }

  return { mutate, error, isLoading };
};

export const useGetMeQuery = (token: string | null) => {
  const { setUser } = useContext(UserContextSetter);
  const { data, error, isFetching } = useQuery<
    unknown,
    userQueryErrorProps,
    getMeQueryDataProps
  >({
    queryKey: ["get-me"],
    queryFn: () => getMeQuery(),
    enabled: !!token,
  });

  if (data) {
    setUser(
      data.me
        ? {
            authenticated: true,
            user: {
              ...data.me,
              blog_likes: userBloglikesTransformer(data.me.blog_likes),
            },
          }
        : null
    );
  }

  if (error) {
    localStorage.removeItem("token");
    setUser(null);
  }

  return { isFetching };
};
