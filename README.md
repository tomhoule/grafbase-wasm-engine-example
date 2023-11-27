# grafbase-wasm-engine-example

## Quick start

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Walkthrough

Starting without postgres: npm install and run index.ts. Open localhost:4000 in
your browser, and you will have a GraphiQL instance with the connectors for the
stripe (openapi) and star wars api (graphql) APIs. Have a look at
grafbase.config.ts to see how they are configured.

Now let's add a postgres database to the api through the postgres connector:

- Start the container on port 5432 using docker compose 
    
  ```
  docker-compose up
  ```

- Create a table or two and insert data:

  ```
  export POSTGRES_URL=postgresql://postgres:grafbase@localhost:5432
  psql $POSTGRES_URL

  CREATE TABLE testdata (
    id SERIAL PRIMARY KEY,
    text_content TEXT NOT NULL
  );

  INSERT INTO testdata (text_content) VALUES 
    ('Despacito'),
    ('Quiero respirar tu cuello despacito'),
    ('Deja que te diga cosas al oído'),
    ('Para que te acuerdes si no estás conmigo'),
    ('Despacito')
  ```
