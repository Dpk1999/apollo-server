# What is GraphQL?
   -  GraphQL is an application layer server-side technology which is developed by Facebook for executing queries with existing data.
   -  GraphQL can optimize RESTful API calls. It gives a declarative way of fetching and updating your data. 

### Why use GraphQL?
   - It provides a human-readable query.
   - In GraphQL, it is very easy to deal with many database.
   - You can fetch data with a single API call.
   - It helps you to discover the schema in the appropriate format.
   - It can be used for rapid application prototyping.

## Difference between GraphQL and Rest
GraphQL|Rest
---------- | -----------
It follows client-driven architecture.| It follows server-driven architecture.
GraphQL can be organized in terms of a schema | REST can be organized in terms of endpoints
The development speed in GraphQL is fast | The development speed in REST is Slow
Fetching specific data with single API call | Fetching fixed data with multiple API call
Performance is fast | Multiple network calls take up more time.

### Write down about Schema and Resolvers
    1. Resolver : Resolvers provide the directions for converting GraphQL operation into data. They resolve the query to data by defining resolver functions.
    It displays the server the process as well as location to fetch data according to a specific field. 
    The resolver also separates database schema and API schema.
    The separated information helps to modify the content obtained from the database.

    2. Schema : A GraphQL schema is the center of GraphQL implementation. It describes the functionality available to the clients which are connecting to it.