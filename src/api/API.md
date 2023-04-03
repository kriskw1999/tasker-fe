# API
The api layer is structured in the following way
- **client**: the client exposes the methods like `get`, `post`, `put`, `delete` and `patch` to make requests to the server.
- **entities**: each entity has its own file and implements the methods of the client to make requests to the server.
- **index**: the index file exports all the entities.
