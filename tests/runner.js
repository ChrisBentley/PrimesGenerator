// runner.js

var run = function() { JS.Test.autorun() }

var ROOT = JS.ENV.ROOT || '.'
JS.cache = false

JS.load(  ROOT + '/jquery-3.1.1.min.js',
          ROOT + '/tests/helpers.js',
          ROOT + '/primes.js',
          ROOT + '/tests/spec/spec_primes.js',

          run)
