'use strict';

function init(rules) {
  const newState = {
    rules
  };
  return run(newState, 'init');
}

function run(state, input) {
  if (!rules.first) return state; // No rules
  let currentRule = rules.first;
  while(currentRule) {
    if (currentRule.match(state, input)) {
      return currentRule.run(state, input);
    }
    currentRule = rule.next;
  }
  return state;
}

module.exports = {
  init,
  run
};
