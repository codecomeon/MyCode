"use strict";

const {MongoClient} = require('mongodb');
const { mongo } = require('../config.js');
const logger = require('log4js').getLogger('mongodb');
let mclient = null, // 默认的链接
  mClientDb = {}, // 默认使用的数据库
  clients = {}; // 所有的数据库链接

// 遍历链接所有的 mongo 数据库
for(let key in mongo) {
  mclient = mclient || key;
  mClientDb[key] = mongo[key].dbname;
  // 链接到 mongo
  MongoClient.connect(mongo[key].url).then((client) => {
    logger.debug('mongo connect success: ' + mongo[key].url);
    clients[key] = client;
  }).catch((err) => {
    logger.error(err);
  });
}

/**
 * client -- 切换链接(对应链接的时候的名称), 默认为链接时的第一个
 * dbName -- 切换数据库,如果不填,则使用配置中填写的默认的
 */
let defaultCo = {
  client: mclient // 切换链接
};

function dbname(opts) {
  return opts['dbName'] || mClientDb[opts['client']];
}

module.exports = {
  /**
   * 查询文档 find - http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find
   * @param connname  表名
   * @param query     find -- query
   * @param fopts     find -- options
   * @param opts      defaultCo
   */
  find: (connname, query, fopts, opts = defaultCo) => {
    return clients[opts['client']].db(dbname(opts)).collection(connname).find(query, fopts).toArray();
  },
  findOne: (connname, query, fopts, opts = defaultCo) => {
    return clients[opts['client']].db(dbname(opts)).collection(connname).findOne(query, fopts);
  },
  insertOne: function(connname, doc) {
    return mdb.collection(connname).insertOne(doc);
  },
  findOne1: function(connname, query, options) {
    return mdb.collection(connname).findOne(query, options);
  },
  count: function(connname, query) {
    return mdb.collection(connname).count(query);
  },
  updateOne: (connname, filter, update, options) => {
    return mdb.collection(connname).updateOne(filter, update, options);
  },
  collection: (collname) => {
    return mdb.collection(collname);
  },
  close: () => {
    mdb.close();
  }
};