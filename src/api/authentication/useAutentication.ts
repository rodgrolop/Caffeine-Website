import { useLazyQuery, useMutation } from "@apollo/client";
import {
  userAtom,
  userFetchStatusAtom,
  userLoginStatusAtom,
  userQueryErrorProps,
} from "@atoms";
import { LOGIN_MUTATION } from "@mutations";
import { GET_ME } from "@queries";
import { useSetRecoilState } from "recoil";
import { loginInputProps } from "./useAuthenticationProps";
import { errorResponseTransformer, userBloglikesTransformer } from "@utils";
import { useQuery } from "@tanstack/react-query";
import { getMeQuery } from "@react-query-client";

type getMeQueryData = {
  me: {
    blocked: boolean;
    blog_likes: { data: { id: string }[] };
    confirmed: boolean;
    email: string;
    id: string;
    username: string;
  };
};

export const useLogin = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const setUser = useSetRecoilState(userAtom);
  const setUserLoginStatus = useSetRecoilState(userLoginStatusAtom);

  const logIn = (loginInput: loginInputProps) => {
    setUserLoginStatus({ loading: true, errors: null });
    loginMutation({ variables: { input: loginInput } })
      .then(({ data }) => {
        localStorage.setItem("token", data.login.jwt);
        setUserLoginStatus({ errors: null, loading: false });
        setUser({
          authenticated: true,
          jwt: data.login.jwt,
          user: {
            ...data.login.user,
            blog_likes: userBloglikesTransformer(data.login.user.blog_likes),
          },
        });
      })
      .catch(({ graphQLErrors }) => {
        setUserLoginStatus({
          errors: errorResponseTransformer(graphQLErrors),
          loading: false,
        });
      });
  };

  return { logIn };
};

export const useGetMe = () => {
  const [getMeQuery] = useLazyQuery(GET_ME);
  const setUser = useSetRecoilState(userAtom);
  const setUserFetchStatus = useSetRecoilState(userFetchStatusAtom);

  const getMe = () => {
    setUserFetchStatus({ loading: true, errors: null });
    getMeQuery()
      .then(({ data }) => {
        setUserFetchStatus({ errors: null, loading: false });
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
      })
      .catch((errors) => {
        setUser(null);
        setUserFetchStatus({ loading: false, errors });
      });
  };

  return { getMe };
};

export const useGetMeQuery = (token: string | null) => {
  const setUser = useSetRecoilState(userAtom);
  const setUserFetchStatus = useSetRecoilState(userFetchStatusAtom);
  const { data, error, isFetching } = useQuery<
    unknown,
    userQueryErrorProps,
    getMeQueryData
  >({
    queryKey: ["get-me"],
    queryFn: () => getMeQuery(),
    enabled: !!token,
  });
  if (isFetching) {
    setUserFetchStatus({ loading: true, errors: null });
  }
  if (data) {
    setUserFetchStatus({ errors: null, loading: false });
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
    setUser(null);
    setUserFetchStatus({ loading: false, errors: error });
  }
  return { isFetching };
};
