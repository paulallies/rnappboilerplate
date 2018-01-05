const { capitalize } = require("lodash")

function getReducers(store_state) {
    let result = "";
    store_state.forEach(s => {
        result += `import ${s} from './reducers/${s}';\n`
    });
    return result;
}

function getStore(store_state) {
    let result = "";
    store_state.forEach(s => {
        result += `${s},\n`
    });
    return result;
}
module.exports = function (store_state) {
    return `
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
${getReducers(store_state)}

const totalReducers = combineReducers({
\t${getStore(store_state)}
});

let Store = createStore(totalReducers, applyMiddleware(thunk));
export default Store;
`
} 