module.exports = check = (str, bracketsConfig) => {
  const stack = [];
  const pairs = {};
  bracketsConfig.map(([a, b]) => (pairs[a] = b));
  for (let bracket of str) {
    if (pairs[bracket]) {
      bracket == pairs[bracket] && bracket == stack[stack.length - 1] ? stack.pop() : stack.push(bracket);
    } else if (Object.values(pairs).includes(bracket) && bracket !== pairs[stack.pop()]) {
      return false;
    }
  }
  return !stack.length;
};
