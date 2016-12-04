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

        return generatedPrimes;
    }

    function drawTable(generatedPrimes) {
        console.log("Drawing table for prime numbers.");

        var $tableWrapper = $('#table-wrapper');
        var $primesTable = $('#primes-table');

        if ($primesTable.children().length > 0) {
            $primesTable.empty();
        }

        for (var i = 0; i < (generatedPrimes.length + 1); i++) {
            $primesTable.append('<tr>');

            if (i == 0) {
                $primesTable.append('<td>' + '</td>');
                for (var j = 0; j < generatedPrimes.length; j++) {
                    $primesTable.append('<td>' + generatedPrimes[j] + '</td>');
                }
            } else {
                $primesTable.append('<td>' + generatedPrimes[i - 1] + '</td>');
                for (var j = 0; j < generatedPrimes.length; j++) {
                    $primesTable.append('<td>' + (generatedPrimes[j] * generatedPrimes[i - 1])  + '</td>');
                }
            }
        }

        $tableWrapper.show();
    }

    function setupPrimeGeneration() {
        console.log("Setting up Primes generation...");

        var $enterNumberMsg = $('#enter-numbers');

        $('#generate-primes').on('click', function(e) {
            e.preventDefault();

            var $primesToGenerate = $('#primes-to-generate'),
                numberOfPrimesToGenerate = $primesToGenerate.val();

            if (!numberOfPrimesToGenerate || numberOfPrimesToGenerate < 1) {
                $enterNumberMsg.show();
            } else {
                $enterNumberMsg.hide();
                drawTable(generatePrimes(numberOfPrimesToGenerate));
            }
        });

    }

    return {
        setup: function() {
            setupPrimeGeneration();
        },
        generatePrimes : function(x) {
            generatePrimes(x);
        },
        drawTable : function(x) {
            drawTable(x);
        }
    };

})(jQuery);

$(function($) {
    "use strict";
    Primes.setup();
});