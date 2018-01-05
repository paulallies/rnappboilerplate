const { capitalize } = require("lodash")
module.exports = function (action) {
  return `
import ACTION_TYPES from './action_types';
import api from '../api/${action.name}';

export function authenticate(){

}

export function logout(){

}

export function login(){

}

export function set${capitalize(action.name)}(payload){
  return {
    type: ACTION_TYPES.${("set_" + action.name).toUpperCase()},
    payload
  }
}
`
} 