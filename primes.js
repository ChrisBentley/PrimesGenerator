var Primes = (function($) {
    "use strict";

    function generatePrimes(numberOfPrimesToGenerate) {
        console.log("Generating " + numberOfPrimesToGenerate + " Primes");

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