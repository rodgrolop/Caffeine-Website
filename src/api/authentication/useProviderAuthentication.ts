import { userBloglikesTransformer } from "@utils";
import { useQuery } from "@tanstack/react-query";
import type {
  getMeQueryDataProps,
  providerUserQueryProps,
  userQueryErrorProps,
} from "./useAuthenticationProps";
import { useContext } from "preact/hooks";
import { UserContextSetter } from "@context";
import { providerAuthQuery } from "../queries/provider-auth-query";
import { graphQLClient } from "../client/reactQueryClient";
import { getMeQuery } from "../queries/me-query";

export const useProviderAuthentication = (
  token: string | null,
  provider: string
) => {
  const { setUser } = useContext(UserContextSetter);
  const { data: providerAuthData } = useQuery<
    unknown,
    userQueryErrorProps,
    providerUserQueryProps
  >({
    queryKey: ["provider-auth"],
    queryFn: () => providerAuthQuery(token, provider),
    enabled: !!token && !!provider,
  });

  const [jwt, providerError] = [providerAuthData?.jwt, providerAuthData?.error];

  if (jwt) {
    graphQLClient.setHeader(`authorization`, `Bearer ${jwt}`);
    localStorage.setItem("token", jwt);
  }

  const { data, error, isFetching } = useQuery<
    unknown,
    userQueryErrorProps,
    getMeQueryDataProps
  >({
    queryKey: ["get-me-provider"],
    queryFn: () => getMeQuery(),
    enabled: !!jwt,
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

  if (error || providerError) {
    localStorage.removeItem("token");
    setUser(null);
  }

  return { error, isFetching, providerError };
};
