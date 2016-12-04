var Primes = (function($) {
    "use strict";

    function generatePrimes(numberOfPrimesToGenerate) {
        console.log("Generating " + numberOfPrimesToGenerate + " Primes");

        var intPrimesToGenerate = parseInt(numberOfPrimesToGenerate);

        var generatedPrimes = [];
        for (var i = 0; generatedPrimes.length < (intPrimesToGenerate + 2); i++) {
            var notPrime = false;
            for (var j = 2; j <= generatedPrimes.length && !notPrime; j++) {
                if (i%generatedPrimes[j] === 0) {
                    notPrime = true;
                }
            }
            if (notPrime === false) generatedPrimes.push(i);
        }

        generatedPrimes.splice(0, 2);

        console.log(generatedPrimes);

        drawTable(generatedPrimes);
    }

    function drawTable(generatedPrimes) {
        console.log("Drawing table for prime numbers.");

        var $tableWrapper = $('#table-wrapper');

        $tableWrapper.show();
    }

    function setupPrimeGeneration() {
        console.log("Setting up Primes generation...");

        var $enterNumberMsg = $('#enter-numbers');

        $('#generate-primes').on('click', function(e) {
            e.preventDefault();

            var $primesToGenerate = $('#primes-to-generate'),
                primesToGenerate = $primesToGenerate.val();

            if (!primesToGenerate || primesToGenerate < 1) {
                $enterNumberMsg.show();
            } else {
                $enterNumberMsg.hide();
                generatePrimes(primesToGenerate);
            }
        });

    }

    return {
        setup: function() {
            setupPrimeGeneration();
        }
    };

})(jQuery);

$(function($) {
    "use strict";
    Primes.setup();
});