// example/spec/set_spec.js

JS.Test.describe('Primes', function() { with(this) {
  // before(function() { with(this) {
  //   this.primes = new Primes()
  // }})

  describe('setup', function() { with(this) {
    it('returns true', function() { with(this) {
      var testing = Primes.setup();
      assert( testing == true );
    }});

  // describe('setupPrimeGeneration', function() { with(this) {
  //   it('Adds the generatePrimes function to the generate-primes button', function() { with(this) {
  //     Primes.setup();
  //     assert( true );
  //   }});

  // describe('generatePrimes', function() { with(this) {
  //   it('returns a list of primes', function() { with(this) {
  //     Primes.setup();
  //     assert( true );
  //   }})

  }})
}})