    Combine a vanilla NodeJS http server with the mongodb drivers to create your first REST API


DONE - Pick a "resource" - the entity (or collection in mongo speak) you're saving and getting, like `unicorns`
* Implement:
    * `GET /<resource>` - returns array of all of the resources
    * `POST /<resource>` - inserts the supplied request body as a document into the resource collection
    * `GET /<resource>/:id` -
      * returns the single object specified by the id
      * returns 404 not found if no resource found with that id    
* Use plural name in your url path (`/unicorns`, **not** `/unicorn`)


Things that are done,  I think we had to divide up our helper functions, putting them in different files,
I think that I 
- bodyParser is done.
- notFound
- parsePath 
