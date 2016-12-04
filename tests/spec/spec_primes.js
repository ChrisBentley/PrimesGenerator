JS.Test.describe('Primes', function() { with(this) {

  describe('generatePrimes', function() { with(this) {

    it('returns a list of primes', function() { with(this) {
      var expectedPrimes = [2, 3, 5, 7, 11];
      var generatedPrimes = Primes.generatePrimes("5");
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

      var expectedTable = '<tr></tr><td></td><td>2</td><td>3</td><td>5</td><tr></tr><td>2</td><td>4</td><td>6</td><td>10</td><tr></tr><td>3</td><td>6</td><td>9</td><td>15</td><tr></tr><td>5</td><td>10</td><td>15</td><td>25</td>';

      Primes.drawTable([2, 3, 5]);

      var $producedTable = $('#primes-table').html();

      assertEqual(expectedTable, $producedTable);
    }});

  }});

  describe('Invalid input message.', function() { with(this) {

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

    it('Displays the "enter numbers" error message when 0 is entered', function() { with(this) {
      Primes.setup();

      $('#primes-to-generate').val('0')
      $('#generate-primes').click();

      assert($('#enter-numbers').css('display') === 'block');
    }});

    it('Displays the "enter numbers" error message when invalid input is entered', function() { with(this) {
      Primes.setup();

      $('#primes-to-generate').val('a')
      $('#generate-primes').click();

      assert($('#enter-numbers').css('display') === 'block');
    }});

  }});

  describe('generatePrimesSpeedTest', function() { with(this) {

    it('Tests the speed of the generatePrimes function (see console)', function() { with(this) {
      var t0 = performance.now();
      Primes.generatePrimes("10000");
      var t1 = performance.now();
      console.log("Call to generatePrimes took " + (t1 - t0) + " milliseconds.")
      assert(true);
    }});

  }});

}})