const invariant = require('invariant');
const CSSVarConfig = require('./CSSVars');

const cssV = function (/* string*/ key) /* string*/ {
    invariant(CSSVarConfig[key], `invalid css variable ${key}`);

    return CSSVarConfig[key];
};

module.exports = cssV;
