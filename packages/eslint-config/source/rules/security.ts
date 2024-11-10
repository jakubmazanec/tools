import type eslint from 'eslint';

export const securityRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-security rules
  'security/detect-bidi-characters': 'warn', // detects trojan source attacks that employ unicode bidi attacks to inject malicious code
  'security/detect-buffer-noassert': 'warn', // detects calls to "buffer" with "noAssert" flag set
  'security/detect-child-process': 'warn', // d Detects instances of "child_process" & non-literal "exec()" calls
  'security/detect-disable-mustache-escape': 'warn', // detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities
  'security/detect-eval-with-expression': 'warn', // dDetects "eval(variable)" which can allow an attacker to run arbitrary code inside your process
  'security/detect-new-buffer': 'warn', // detects instances of new Buffer(argument) where argument is any non-literal value
  'security/detect-no-csrf-before-method-override': 'warn', // detects Express "csrf" middleware setup before "method-override" middleware
  'security/detect-non-literal-fs-filename': 'off', // detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system
  'security/detect-non-literal-regexp': 'off', // detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression
  'security/detect-non-literal-require': 'off', // detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk
  'security/detect-object-injection': 'off', // detects "variable[key]" as a left- or right-hand assignment operand
  'security/detect-possible-timing-attacks': 'warn', // detects insecure comparisons (==, !=, !== and ===), which check input sequentially
  'security/detect-pseudoRandomBytes': 'warn', // detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect
  'security/detect-unsafe-regex': 'off', // detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop
};
