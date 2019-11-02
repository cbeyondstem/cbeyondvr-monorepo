export interface StoreStateUserProfileForm {
  userProfileForm: string
}

// Actions
export const SET_USERPROFILEFORM_STR = 'SET_USERPROFILEFORM'
export type SET_USERPROFILEFORM = typeof SET_USERPROFILEFORM_STR
type SetUserProfileFormAction = { type: SET_USERPROFILEFORM; form: string }

type ActionsUserProfileForm = SetUserProfileFormAction

export const setUserProfileForm = (form: string): SetUserProfileFormAction => ({
  type: SET_USERPROFILEFORM_STR,
  form
})

export const reducerUserProfileFormInitialState: StoreStateUserProfileForm = {
  userProfileForm: '{}'
}
// Reducer
export const reducerUserProfileForm = (
  state: StoreStateUserProfileForm = reducerUserProfileFormInitialState,
  action: ActionsUserProfileForm
): StoreStateUserProfileForm => {
  // console.log(`REDUCER STATE ${JSON.stringify(state, null, 3)}`);

  switch (action.type) {
    case SET_USERPROFILEFORM_STR:
      // console.log(SET_USERPROFILEFORM_STR+'/ form='+action.form );
      return { ...state, userProfileForm: action.form }
      break
    default:
      return state
  }
}
