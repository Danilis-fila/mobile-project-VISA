import React from "react";
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const getDBConnection = async () => {
  return openDatabase({name: 'card.db', location: 'default'});
};

export default class db {
    
    constructor() {
        getDBConnection();
    }

    add(id, value) {
           const insertQuery =
           `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
           todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');
           return db.executeSql(insertQuery);
        
    }

   createTable () {
        // create table if not exists
        const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
              value TEXT NOT NULL
          );`
      };
}

