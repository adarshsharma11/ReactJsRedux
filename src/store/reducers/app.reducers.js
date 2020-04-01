import { APP_LOADING} from "../constants/constants";

const initialState = {
    isLoading:false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case APP_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default appReducer;

