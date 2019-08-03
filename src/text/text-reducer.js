import { TEXT_RETRIEVED } from "./text-action";


const textReducer = (state = {}, action) => {
    switch (action.type) {
        case TEXT_RETRIEVED:
            return { ...action.text };
        default:
            return state;
    }
};

export default textReducer;