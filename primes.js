var Primes = (function($) {
    "use strict";

    function setupPrimeGeneration() {
        console.log("setting up Primes generation.");
        return true;
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