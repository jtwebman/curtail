'use strict';

const curtail = require('./curtail');

const ACTION_INIT = 'init';
const ACTION_ADD_RULE = 'addRule';

function matcher(matchOnAction, checkFunction) {
  return (state, input) => {
    if (matchOnAction === input.action) {
      return checkFunction ? checkFunction(state, input.data) : true;
    }
    return false;
  };
}

function init() {
  return {
    status: ACTION_INIT,
    first: null,
    last: null
  };
}

function addRule(state, input) {
  return {
    status: 'addingRule',
    first: state.first,
    last: {
      match: matcher,
      run: runner
    }
  };
}


function addRule(state, matcher, runner) {
  return curtail.run(state, {
    action: ACTION_ADD_RULE,
    data: {
      matcher,
      runner
    }
  });
}

module.exports = {
  init: curtail.init([
    {
      match: matcher(ACTION_INIT),
      run: init
    },
    {
      match: matcher(ACTION_ADD_RULE),
      run: (state, action) => {

      }
    }
  ]),
  addRule
};
