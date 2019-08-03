export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_RETRIEVE = 'USER_LOGIN_RETRIEVE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';

export const userLoginAction = () => ( { type: USER_LOGIN } );
export const userRetrieveAction = () => ( { type: USER_LOGIN_RETRIEVE } );
export const userLogoutAction = () => ( { type: USER_LOGOUT } );
export const userRegisterAction = () => ( { type: USER_REGISTER } );


export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_REGISTERED = 'USER_REGISTERED';

export const userLoggedInAction = (user) => ( { type: USER_LOGGED_IN, user } );
export const userLoggedOutAction = () => ( { type: USER_LOGGED_OUT } );
export const userRegisteredAction = (verificationCode) => ( { type: USER_REGISTERED, verificationCode } );