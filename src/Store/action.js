import { ADD_USER_LIST } from "./actionType";

export const setUserList = user => ({
    type: ADD_USER_LIST,
    user
});