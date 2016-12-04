// example/spec/set_spec.js

JS.Test.describe('Primes', function() { with(this) {
  // before(function() { with(this) {
  //   this.primes = new Primes()
  // }})

  describe('setup', function() { with(this) {
    it('returns true', function() { with(this) {
      var testing = Primes.setup();
      assert( testing === true )
    }})

  }})
}})