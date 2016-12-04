// example/spec/set_spec.js

JS.Test.describe('Primes', function() { with(this) {
  before(function() { with(this) {
    this.primes = Primes
  }})

  describe('setup', function() { with(this) {

    it('returns true', function() { with(this) {
      var testing = primes.setup();
      assertEqual(true, testing);
    }});

  }});

  describe('setupPrimeGeneration', function() { with(this) {

    // fixture(
    //   '<div></div>'
    // );

    it('Adds the generatePrimes function to the generate-primes button', function() { with(this) {
      window.current_state = {};
      primes.setup();
      // assertNotEqual(($('#generate-primes').attr("onClick") != undefined);
      assert(true);
    }});

  }});

  describe('generatePrimes', function() { with(this) {

    it('returns a list of primes', function() { with(this) {
      primes.setup();
      assert(true);
    }});

  }});

  describe('drawTable', function() { with(this) {

    it('Creates an x-by-x table', function() { with(this) {
      primes.setup();
      assert(true);
    }});

    it('Populates the table with the correct values', function() { with(this) {
      primes.setup();
      assert(true);
    }});

  }});

}})