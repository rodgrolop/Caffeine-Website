import { createContext } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";

export type userProps = {
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

export const UserContext = createContext<userProps | null>(null);
export const UserContextSetter = createContext({
  setUser: (_userData: userProps | null) => {},
});

const UserContextProvider = (props: any) => {
  const [user, setUserState] = useState<userProps | null>(null);

  const setUser = useCallback((userData: userProps | null) => {
    setUserState(userData);
  }, []);

  const userSetter = useMemo(() => ({ setUser }), [setUser]);

  return (
    <UserContext.Provider value={user}>
      <UserContextSetter.Provider value={userSetter}>
        {props.children}
      </UserContextSetter.Provider>
    </UserContext.Provider>
  );
};
export default UserContextProvider;
