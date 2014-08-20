'use strict';

module.exports = function(rules){
  if(typeof rules === 'string')rules = [rules];
  if(!Array.isArray(rules))rules = [];

  var hasFilter = !!rules.length;

  return function refererFilter(req, res, next){
    var referer;

    if(hasFilter){
      referer = req.headers.referer;
      if(referer){
        if(rules.indexOf(referer) > -1)return next();
      }
      return next({status: 403});
    }
    next();
  };
};
