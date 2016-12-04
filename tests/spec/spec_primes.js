JS.Test.describe('Primes', function() { with(this) {

  describe('setupPrimeGeneration', function() { with(this) {

    fixture(
      '<div id="wrapper"> \
        <h1>Prime Number Generator</h1> \
        <form id="primes"> \
          <input type="number" id="primes-to-generate"> \
          <button type="button" id="generate-primes">Generate Primes!</button> \
        </form> \
        <p id="enter-numbers" style="display: none;">Please enter the number of primes to generate. (Must be >= 1)</p> \
        <div id="table-wrapper" style="display: none;"> \
          <h2>Multiplication table of primes:</h2> \
          <table id="primes-table" cellspacing="0"></table> \
        </div> \
      </div>'
    );

    it('Adds the generatePrimes function to the generate-primes button', function() { with(this) {
      window.current_state = {};
      Primes.setup();
      console.log($('#generate-primes'));
      assertNotEqual(($('#generate-primes').attr("onClick"), undefined));
    }});

  }});

  describe('generatePrimes', function() { with(this) {

    it('returns a list of primes', function() { with(this) {
      var expectedPrimes = [2, 3, 5, 7, 11]
      var generatedPrimes = Primes.generatePrimes("5");
      console.log(generatedPrimes);
      assertEqual(expectedPrimes, generatedPrimes);
    }});

  }});

  describe('drawTable', function() { with(this) {

    fixture(
      '<div id="wrapper"> \
        <div id="table-wrapper"> \
          <h2>Multiplication table of primes:</h2> \
          <table id="primes-table" cellspacing="0"></table> \
        </div> \
      </div>'
    );

    it('Creates a multiplication table of the provided numbers', function() { with(this) {
      window.current_state = {};

      var expectedTable = '<tr></tr><td></td><td>2</td><td>3</td><td>5</td><tr></tr><td>2</td><td>4</td><td>6</td><td>10</td><tr></tr><td>3</td><td>6</td><td>9</td><td>15</td><tr></tr><td>5</td><td>10</td><td>15</td><td>25</td>';

      Primes.drawTable([2, 3, 5]);

      var $producedTable = $('#primes-table').innerHTML();

      console.log($producedTable);

      assertEqual(expectedTable, producedTable);
    }});

  }});

}})