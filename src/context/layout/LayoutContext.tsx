import { createContext } from "preact";
import { useReducer } from "preact/hooks";

const actions = {
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
};

type layoutContextProps = {
  isDrawerOpen: boolean;
  toggleDrawer?: () => void;
};

const defaultState: layoutContextProps = {
  isDrawerOpen: false,
};

export const LayoutContext = createContext(defaultState);

const reducer = (state: layoutContextProps, action: any) => {
  switch (action.type) {
    case actions.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return defaultState;
  }
};

const LayoutContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const toggleDrawer = () => dispatch({ type: actions.TOGGLE_DRAWER });

  return (
    <LayoutContext.Provider
      value={{ isDrawerOpen: state.isDrawerOpen, toggleDrawer }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};
export default LayoutContextProvider;
