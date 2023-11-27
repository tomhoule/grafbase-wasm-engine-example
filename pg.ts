const grafbase = require('@tomhoule/grafbase-library-engine-experiment');
const pg = require('pg')
const Client = pg.Client

const client = new Client(process.env.POSTGRES_URL)

// Race condition, but it should be fine for demo purposes. This should be awaited.
client.connect()

async function parameterized_query(query: string, params: any[]) {
    console.log("query: " + query + " params: " + params)
    let result = await client.query(query, params)
    return result.rows[0]
}

async function parameterized_execute(query: string, params: any[]) {
    console.log("execute: " + query + " params: " + params);
    let result = await client.query(query, params)
    console.log("result: " + JSON.stringify(result))
    return result.rowCount
}


export const callbacks = new grafbase.PgCallbacks(parameterized_execute, parameterized_query)
