import { get } from "lodash";
import { getAuth } from "../utils/authentication";

export interface StoreStateCommon {
  isSidebarVisible: boolean
  isHeaderMenuVisible: boolean
  authenticated: boolean
}

// Actions

export const SET_AUTHENTICATED_STR = "SET_AUTHENTICATED";
export type SET_AUTHENTICATED = typeof SET_AUTHENTICATED_STR;
type SetAuthenticatedAction = { type: SET_AUTHENTICATED, authenticated: boolean };

export const TOGGLE_SIDEBAR_STR = "TOGGLE_SIDEBAR";
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR_STR;
type ToggleSidebarAction = { type: TOGGLE_SIDEBAR };

export const HIDE_SIDEBAR_STR = "HIDE_SIDEBAR";
export type HIDE_SIDEBAR = typeof HIDE_SIDEBAR_STR;
type HideSidebarAction = { type: HIDE_SIDEBAR };

export const SHOW_HEADER_MENU_STR = "SHOW_HEADER_MENU";
export type SHOW_HEADER_MENU = typeof SHOW_HEADER_MENU_STR;
type showHeaderMenuAction = { type: SHOW_HEADER_MENU };

export const HIDE_HEADER_MENU_STR = "HIDE_HEADER_MENU";
export type HIDE_HEADER_MENU = typeof HIDE_HEADER_MENU_STR;
type hideHeaderMenuAction = { type: HIDE_HEADER_MENU };

type ActionsCommon =
  | SetAuthenticatedAction
  | ToggleSidebarAction
  | HideSidebarAction
  | showHeaderMenuAction
  | hideHeaderMenuAction

export const setAuthenticated = (authenticated:boolean) : SetAuthenticatedAction => ({ type: SET_AUTHENTICATED_STR, authenticated });
export const toggleSidebar = () : ToggleSidebarAction => ({ type: TOGGLE_SIDEBAR_STR });
export const hideSidebar = () : HideSidebarAction => ({ type: HIDE_SIDEBAR_STR });
export const showHeaderMenu = () : showHeaderMenuAction => ({ type: SHOW_HEADER_MENU_STR });
export const hideHeaderMenu = () : hideHeaderMenuAction => ({ type: HIDE_HEADER_MENU_STR });

export const reducerCommonInitialState: StoreStateCommon = { 
  isSidebarVisible: false, 
  isHeaderMenuVisible: true,
  authenticated: getAuth().isAuthenticated()
};
// Reducer
export const reducerCommon=(state: StoreStateCommon=reducerCommonInitialState, action: ActionsCommon): StoreStateCommon => {
  //console.log(`REDUCER STATE ${JSON.stringify(state, null, 3)}`);

  switch (action.type) {
    case SET_AUTHENTICATED_STR:
      //console.log(SET_AUTHENTICATED_STR+'/ authenticated='+action.authenticated );
      return Object.assign({}, state, { authenticated: action.authenticated });
      break;
    case TOGGLE_SIDEBAR_STR:
      //console.log(TOGGLE_SIDEBAR_STR+'/ isSidebarVisible='+state.isSidebarVisible );
      return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
      break;
    case HIDE_SIDEBAR_STR:
      //console.log(HIDE_SIDEBAR_STR+'/ isSidebarVisible='+state.isSidebarVisible );
      return Object.assign({}, state, { isSidebarVisible: false });
      break;
    case SHOW_HEADER_MENU_STR:
      //console.log(SHOW_HEADER_MENU_STR+'/ isheaderMenuVisible='+state.isheaderMenuVisible );
      return Object.assign({}, state, { isHeaderMenuVisible: true });
      break;
    case HIDE_HEADER_MENU_STR:
      //console.log(HIDE_HEADER_MENU_STR+'/ isheaderMenuVisible='+state.isheaderMenuVisible );
      // Important Note: eniac demo header hiding is disabled so isHeaderMenuVisible is always true
      return Object.assign({}, state, { isHeaderMenuVisible: true });
      break;
    default:
      return state;
  }
}
