import { g, config, connector } from '@grafbase/sdk'

// const pg = connector.Postgres('pg', { url: g.env('POSTGRES_URL') })
// g.datasource(pg)

const gql = connector.GraphQL('swapi', { url: 'https://swapi-graphql.netlify.app/.netlify/functions/index' })
g.datasource(gql)

const stripe = connector.OpenAPI('stripe', {
    schema:
        'https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json'
    // headers: headers => {
    //   headers.set('Authorization', `Bearer ${g.env('STRIPE_API_KEY')}`)
    // },
})

g.datasource(stripe)

export default config({
    schema: g,
})
