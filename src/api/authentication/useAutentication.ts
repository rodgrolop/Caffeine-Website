import { userAtom } from "@atoms";
import { useSetRecoilState } from "recoil";
import type {
  getMeQueryDataProps,
  loginInputProps,
  loginResponseProps,
  userQueryErrorProps,
} from "./useAuthenticationProps";
import { userBloglikesTransformer } from "@utils";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getMeQuery } from "@api";
import { loginMutation } from "../mutations/login-mutation";

export const useLogin = () => {
  const setUser = useSetRecoilState(userAtom);

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (loginInput: loginInputProps) => loginMutation(loginInput),
  });

  if (data) {
    const { login } = data as loginResponseProps;
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
  const setUser = useSetRecoilState(userAtom);
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
