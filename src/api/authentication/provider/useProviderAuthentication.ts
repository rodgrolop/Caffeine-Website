import axios from "axios";
import { userAtom, userLoginStatusAtom } from "@atoms";
import { useSetRecoilState } from "recoil";
import { useLazyQuery } from "@apollo/client";
import { GET_ME } from "@queries";
import { userBloglikesTransformer } from "@utils";

export const useGetMeProvider = () => {
  const [getMeQuery] = useLazyQuery(GET_ME);
  const setUser = useSetRecoilState(userAtom);
  const setUserLoginStatus = useSetRecoilState(userLoginStatusAtom);

  const getMeProvider = () => {
    setUserLoginStatus({ loading: true, errors: null });
    getMeQuery()
      .then(({ data }) => {
        setUserLoginStatus({ errors: null, loading: false });
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
        setUserLoginStatus({ loading: false, errors });
      });
  };

  return { getMeProvider };
};

export const useProviderAuthentication = () => {
  const setUserLoginStatus = useSetRecoilState(userLoginStatusAtom);
  const { getMeProvider } = useGetMeProvider();

  const authWithToken = (token: string, provider: string): void => {
    setUserLoginStatus({ loading: true, errors: null });
    axios
      .get(
        `${
          import.meta.env.VITE_STRAPI_ENDPOINT
        }/api/auth/${provider}/callback?access_token=${token}`
      )
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        getMeProvider();
      })
      .catch((error) => {
        setUserLoginStatus({
          errors: {
            message: error.response.data.error.message,
            errors: [],
          },
          loading: false,
        });
      });
  };

  return { authWithToken };
};
