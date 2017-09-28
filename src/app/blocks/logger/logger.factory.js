(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$log', 'toastr', 'ENV_VARS'];

  function logger($log, toastr, ENV_VARS) {
    var service = {
      showToasts: true,

      error   : error,
      info    : info,
      success : success,
      warning : warning,
      debug   : debug,

      // straight to console; bypass toastr
      log     : $log.log
    };

    return service;
    /////////////////////

    function error(message, data, title) {
      toastr.error(message, title);
      $log.error('Error: ' + message, data);
    }

    function info(message, data, title) {
      toastr.info(message, title);
      $log.info('Info: ' + message, data);
    }

    function success(message, data, title) {
      toastr.success(message, title);
      $log.info('Success: ' + message, data);
    }

    function warning(message, data, title) {
      toastr.warning(message, title);
      $log.warn('Warning: ' + message, data);
    }

    function debug(message, data, title){
      if(ENV_VARS.debug === "true"){
        toastr.success(message, title);
        $log.info('Success: ' + message, data);
      }
    }
  }
}());
