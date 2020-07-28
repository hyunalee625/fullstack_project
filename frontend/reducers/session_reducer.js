// keep track of our current user

import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const _nullUser = {
    currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, { id: action.user.id });
        case LOGOUT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;