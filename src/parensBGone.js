const parensBGone = (str) => {
  const stack = [];
  const open = { '(': ')' };
  const closed = { ')': true };

  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }

  return stack.length === 0;
}

export parensBGone