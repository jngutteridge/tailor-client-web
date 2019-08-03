import { USER_LOGGED_OUT, USER_REGISTERED, USER_LOGGED_IN } from "./login-action";


const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { user: action.user };
        case USER_LOGGED_OUT:
            return {};
        case USER_REGISTERED:
            const VerificationCode = action.verificationCode;
            const user = { ...state.user, VerificationCode };
            console.log({ ...state, user });
            return { ...state, user };
        default:
            return state;
    }
};

export default loginReducer;