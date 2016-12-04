// example/spec/set_spec.js

JS.Test.describe('Primes', function() { with(this) {
  before(function() { with(this) {
    this.primes = Primes
  }})

  describe('setup', function() { with(this) {

    it('returns true', function() { with(this) {
      var testing = primes.setup();
      assert( testing !== false );
    }});

  }});

  describe('setupPrimeGeneration', function() { with(this) {

    // fixture(
    //   '<div></div>'
    // );

    it('Adds the generatePrimes function to the generate-primes button', function() { with(this) {
      window.current_state = {};
      primes.setup();
      // assert(($('#generate-primes').attr("onClick") != undefined);
    }});

  }});

  // describe('generatePrimes', function() { with(this) {
  //   it('returns a list of primes', function() { with(this) {
  //     Primes.setup();
  //     assert( true );
  //   }})

}})