export const USER_INDEX_RETRIEVE = 'USER_INDEX_RETRIEVE';
export const USER_INDEX_RETRIEVED = 'USER_INDEX_RETRIEVED';

export const userIndexRetrieveAction = () => ({ type: USER_INDEX_RETRIEVE });
export const userIndexRetrievedAction = (index) => ({ type: USER_INDEX_RETRIEVED, index });

export const USER_RETRIEVE = "USER_RETRIEVE";
export const USER_RETRIEVED = "USER_RETRIEVED";

export const userRetrieveAction = (email) => ({ type: USER_RETRIEVE, email });
export const userRetrievedAction = (user) => ({ type: USER_RETRIEVED, user });