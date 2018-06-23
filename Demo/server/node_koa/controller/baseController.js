/**
 * Created by denglin on 2017/4/18.
 */

const _ = require("underscore");
const crypto = require('crypto');

export default class {
    constructor(options){
    let self = this;
    if(options){
      _.map(options, function (val, key) {
        self[key] = val;
      });
    }
    //this.init();
  };
};
