
export interface StoreStateLoginForm {
  loginForm: string
}

// Actions
export const SET_LOGINFORM_STR = "SET_LOGINFORM";
export type SET_LOGINFORM = typeof SET_LOGINFORM_STR;
type SetLoginFormAction = { type: SET_LOGINFORM, form: string };

type ActionsLoginForm =
  | SetLoginFormAction

export const setLoginForm = (form:string) : SetLoginFormAction => ({ type: SET_LOGINFORM_STR, form });

export const reducerLoginFormInitialState: StoreStateLoginForm = { 
  loginForm: "{}"
}
// Reducer
export const reducerLoginForm = (state: StoreStateLoginForm=reducerLoginFormInitialState, action: ActionsLoginForm): StoreStateLoginForm => {
  //console.log(`REDUCER STATE ${JSON.stringify(state, null, 3)}`);

  switch (action.type) {
    case SET_LOGINFORM_STR:
      //console.log(SET_LOGINFORM_STR+'/ form='+action.form );
      return Object.assign({}, state, { loginForm: action.form });
      break;
    default:
      return state;
  }
};
