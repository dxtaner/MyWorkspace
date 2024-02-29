function HTMLElements(str) {
  const htmlTagsRegex = /<([a-z]+)>/g;

  const stack = [];

  let match;
  while ((match = htmlTagsRegex.exec(str)) !== null) {
    const tag = match[1];

    if (tag[0] !== "/") {
      stack.push(tag);
    } else {
      if (stack.length === 0) {
        return tag.substring(1);
      }

      const openTag = stack.pop();

      if (openTag !== tag.substring(1)) {
        return openTag;
      }
    }
  }

  if (stack.length > 0) {
    return stack.pop();
  }

  return true;
}

// keep this function call here
console.log(HTMLElements(readline()));
