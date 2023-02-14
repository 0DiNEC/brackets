module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i <= bracketsConfig.length; i++) { // Loop for every config
    for (const config of bracketsConfig) {
      let findConfig = config[0] + config[1];
      while (str.indexOf(findConfig) !== -1)
        str = str.replace(findConfig, '');
    }
  }
  return str.length === 0 ? true : false;
}