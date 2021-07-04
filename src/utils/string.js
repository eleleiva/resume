function toCamelCase(str) {
  return str.replace(/([-_][a-zA-Z0-9])/g, (group) =>
    group.toUpperCase().replace('_', '')
  );
}

export { toCamelCase };
