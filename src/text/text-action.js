export const TEXT_RETRIEVE = 'TEXT_RETRIEVE';
export const TEXT_RETRIEVED = 'TEXT_RETRIEVED';

export const textRetrieveAction = () => ({ type: TEXT_RETRIEVE });
export const textRetrievedAction = (text) => ({ type: TEXT_RETRIEVED, text });