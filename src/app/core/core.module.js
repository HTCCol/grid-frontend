(function () {
  'use strict'
  angular.module('CondorUi.core', [

    /*
     * Angular modules
     */
    'ui.router', // Angular flexible routing
    'angular-jwt', // Angular Jwt helper
    /*
     * Our reusable cross app code modules
     */
    'blocks.logger'
  ])
    .run(function () {
      console.log('CondorUi Core is Ready')
    })
})()
