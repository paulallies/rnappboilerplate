const { capitalize } = require("lodash")
module.exports = function (action) {
  return `
import ACTION_TYPES from './action_types';
import api from '../api/${action.name}';
const Actions = {    
  get${capitalize(action.name)}s() {
    return dispatch =>
      api.get${capitalize(action.name)}s()
        .then(res => {
          dispatch(Actions.set${capitalize(action.name)}s(res));
        })
        .catch(err => {

        });
  },

  get${capitalize(action.name)}(id) {
    return dispatch =>
      api.get${capitalize(action.name)}(id)
        .then(res => {
          dispatch(Actions.set${capitalize(action.name)}(res));
        })
        .catch(err => {

        });
  },

  delete${capitalize(action.name)}(id) {
    return dispatch =>
      api.delete${capitalize(action.name)}(id)
        .then(res => {
          dispatch(Actions.set${capitalize(action.name)}s());
        })
        .catch(err => {
          alert("Error Deleting ")
        });
  },

  update${capitalize(action.name)}(index, prop, value) {
    return {
      type: ACTION_TYPES.${("update_" + action.name).toUpperCase()},
      index,
      prop,
      value
    }
  },

  set${capitalize(action.name)}(payload) {
    return {
      type: ACTION_TYPES.${("set_" + action.name).toUpperCase()},
      payload
    }
  },

  set${capitalize(action.name)}s(payload) {
    return {
      type: ACTION_TYPES.${(`set_${action.name}s`).toUpperCase()},
      payload
    }
  }

}    
export default Actions;
`
} 