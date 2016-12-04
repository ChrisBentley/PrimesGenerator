var Primes = (function($) {
    "use strict";

    function generatePrimes(numberOfPrimesToGenerate) {
        console.log("Generating " + numberOfPrimesToGenerate + " Primes");

    }

    function setupPrimeGeneration() {
        console.log("Setting up Primes generation...");

        $('#generate-primes').on('click', function(e) {
            e.preventDefault();

            var $primesToGenerate = $('#primes-to-generate');

            generatePrimes($primesToGenerate.val());
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