import { ADD_USER_LIST } from "./actionType";

export default (state, action) => {
    switch(action.type) {

        case ADD_USER_LIST:
            return {
                ...state,
                userList: [
                    ...state.userList,
                    action.user
                ]
            };
            
        default:
            return state;
    }
};