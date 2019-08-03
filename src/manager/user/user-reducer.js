import { USER_INDEX_RETRIEVED, USER_RETRIEVED } from "./user-action";

const userReducer = (state = { index: [] }, action) => {
    switch (action.type) {
        case USER_INDEX_RETRIEVED:
            const index = action.index;
            return { ...state, index };
        case USER_RETRIEVED:
            const user = action.user;
            return { ...state, user };
        default:
            return state;
    }
};

export default userReducer;