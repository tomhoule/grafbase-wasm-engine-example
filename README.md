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
    id SERIAL PRIMARY KEY,
    text_content TEXT NOT NULL
  );

  INSERT INTO testdata (text_content) VALUES 
    ('Despacito'),
    ('Quiero respirar tu cuello despacito'),
    ('Deja que te diga cosas al oído'),
    ('Para que te acuerdes si no estás conmigo'),
    ('Despacito');
  ```

- Now uncomment the postgres connector definition in grafbase.config.ts and run `npx -y grafbase@0.45.5 dump-config > config.json`. The `POSTGRES_URL` environment variable has to be defined and point to the database that was just populated in the previous step, so grafbase can read the database schema.

- Uncomment the three lines about postgres in `index.ts` and restart the dev server.
- Voilà, you should be able to interact with the postgres database you just populated in the GraphiQL instance at localhost:4000.
