(function(){
    'use strict';

    angular
        .module('shipyard.containers', [
		        'shipyard.services',
                'shipyard.layout',
                'ngResource',
                'ngSanitize',
                'ui.router',
                'angularify.semantic.dropdown'
        ]);

})();
