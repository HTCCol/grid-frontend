(function () {
  'use strict'
  angular.module('CondorUi.core', [

    /*
     * Angular modules
     */
    'ui.router', // Angular flexible routing
    'angular-jwt', // Angular Jwt helper,
    /*
     * Our reusable cross app code modules
     */
    'blocks.logger'
  ])
    .run(function (logger) {
      logger.debug('CondorUi Core is Ready')
    })
})()
