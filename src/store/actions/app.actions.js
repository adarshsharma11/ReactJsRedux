import { APP_LOADING } from "../constants/constants";

export const loading = (yes:boolean = true) => async dispatch => {
    dispatch( {
        type: APP_LOADING,
        payload: yes
    })
}
