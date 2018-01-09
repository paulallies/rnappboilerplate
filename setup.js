/*
  A node script to help set up Redux

 */

'use strict';

/* eslint-disable no-console */

const AdmZip = require('adm-zip');
const ProgressBar = require('progress');

const fall = require('fastfall')();
const fs = require('fs');
const got = require('got');
const path = require('path');
const pump = require('pump');

const actionsfolder = '../src/actions/';
const storefolder = '../src/store/';
const reducerfolder = '../src/store/reducers/';
const actionTypesPath = path.join(actionsfolder, 'action_types.js');
const { action_types, actions, store_state } = require('./redux_config')


function createActions(next) {
  try {
    fs.accessSync(actionsfolder, fs.F_OK);
  } catch (e) {
    fs.mkdirSync(actionsfolder);
  }

  actions.forEach(action => {
    let file = path.join(actionsfolder, action.name + ".js")
    try {
      fs.access(file, fs.F_OK);
    } catch (e) {
      fs.createWriteStream(file);
    }
    let tt = require("./templates/action")(action)
    if (action.name === "account") {
      tt = require("./templates/account_action")(action)
    }

    fs.writeFileSync(file, tt);

  })

  next()
}

function createStore(next) {
  let file = path.join(storefolder, "index.js")
  try {
    fs.accessSync(storefolder, fs.F_OK);
  } catch (e) {
    fs.mkdirSync(storefolder);
  }

  let tt = require("./templates/store")(store_state)
  fs.writeFileSync(file, tt);
  next()
}

function createReducers(next) {
  try {
    fs.accessSync(reducerfolder, fs.F_OK);
  } catch (e) {
    fs.mkdirSync(reducerfolder);
  }

  store_state.forEach(store_entity => {
    let file = path.join(reducerfolder, store_entity.name + ".js")
    try {
      fs.access(file, fs.F_OK);
    } catch (e) {
      fs.createWriteStream(file);
    }

    let tt = require("./templates/reducer_object")(store_entity.name)
    if (store_entity.type === "col") {
      tt = require("./templates/reducer_collection")(store_entity.name)
    }

    fs.writeFileSync(file, tt);

  })

  next()
}

function getActionTypes(config) {
  let result = "\n"
  config.forEach(c => {
    result +=
      `\t${c} : "${c}",\n`
  })
  return result
}

function createActionTypes(next) {
  try {
    fs.access(actionTypesPath, fs.F_OK);
  } catch (e) {
    fs.createWriteStream(actionTypesPath);
  }

  const txt =
    `export default {
      ${getActionTypes(action_types)}
}`

  fs.writeFileSync(actionTypesPath, txt);

  next()
}


function done(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('DONE!');
  }
}

fall([createActions, createStore, createActionTypes, createReducers], done);
