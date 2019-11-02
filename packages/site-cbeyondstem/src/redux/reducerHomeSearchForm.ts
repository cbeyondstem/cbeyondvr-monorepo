
export interface StoreStateHomeSearchForm {
  homeSearchForm: string
}

// Actions
export const SET_HOMESEARCHFORM_STR = "SET_HOMESEARCHFORM";
export type SET_HOMESEARCHFORM = typeof SET_HOMESEARCHFORM_STR;
type SetHomeSearchFormAction = { type: SET_HOMESEARCHFORM, form: string };

type ActionsHomeSearchForm =
  | SetHomeSearchFormAction

export const setHomeSearchForm = (form:string) : SetHomeSearchFormAction => ({ type: SET_HOMESEARCHFORM_STR, form });

export const reducerHomeSearchFormInitialState: StoreStateHomeSearchForm = { 
  homeSearchForm: "{}"
}
// Reducer
export const reducerHomeSearchForm = (state: StoreStateHomeSearchForm=reducerHomeSearchFormInitialState, action: ActionsHomeSearchForm): StoreStateHomeSearchForm => {
  //console.log(`REDUCER STATE ${JSON.stringify(state, null, 3)}`);

  switch (action.type) {
    case SET_HOMESEARCHFORM_STR:
      //console.log(SET_HOMESEARCHFORM_STR+'/ form='+action.form );
      return Object.assign({}, state, { homeSearchForm: action.form });
      break;
    default:
      return state;
  }
};

