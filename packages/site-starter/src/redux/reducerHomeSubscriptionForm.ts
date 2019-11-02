
export interface StoreStateHomeSubscriptionForm {
  homeSubscriptionForm: string
}

// Actions
export const SET_HOMESUBSCRIPTIONFORM_STR = "SET_HOMESUBSCRIPTIONFORM";
export type SET_HOMESUBSCRIPTIONFORM = typeof SET_HOMESUBSCRIPTIONFORM_STR;
type SetHomeSubscriptionFormAction = { type: SET_HOMESUBSCRIPTIONFORM, form: string };

type ActionsHomeSubscriptionForm =
  | SetHomeSubscriptionFormAction

export const setHomeSubscriptionForm = (form:string) : SetHomeSubscriptionFormAction => ({ type: SET_HOMESUBSCRIPTIONFORM_STR, form });

export const reducerHomeSubscriptionFormInitialState: StoreStateHomeSubscriptionForm = { 
  homeSubscriptionForm: "{}"
}
// Reducer
export const reducerHomeSubscriptionForm = (state: StoreStateHomeSubscriptionForm=reducerHomeSubscriptionFormInitialState, action: ActionsHomeSubscriptionForm): StoreStateHomeSubscriptionForm => {
  //console.log(`REDUCER STATE ${JSON.stringify(state, null, 3)}`);

  switch (action.type) {
    case SET_HOMESUBSCRIPTIONFORM_STR:
      //console.log(SET_HOMESUBSCRIPTIONFORM_STR+'/ form='+action.form );
      return Object.assign({}, state, { homeSubscriptionForm: action.form });
      break;
    default:
      return state;
  }
};
