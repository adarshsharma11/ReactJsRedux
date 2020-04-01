import { LOGIN,SIGNUP,LOGOUT} from "../constants/constants";

const initialState = {
    user_id: '',
    jwt_id:'',
    loggedIn:false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const { user_id,loggedIn ,jwt_id} = action.payload;
            return {
                ...state,
                user_id: user_id,
                loggedIn: loggedIn,
                jwt_id:jwt_id
            };

        case SIGNUP: {
            const { user_id,loggedIn } = action.payload;
            return {
                ...state,
                user_id: user_id,
                loggedIn: loggedIn
            };
        }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;

