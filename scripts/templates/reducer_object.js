const { capitalize } = require("lodash")
module.exports = function (store_item) {
    return `
import ACTION_TYPES from '../../actions/action_types';

export default (state = {}, action) => {
    switch (action.type) {
  
        case ${("action_types.set_" + store_item).toUpperCase()}:
            return action.payload;

        case ${("action_types.update_" + store_item).toUpperCase()}:
            return Object.assign({}, state, action.payload);
  
        default:
            return state;
    }
}
`
} 