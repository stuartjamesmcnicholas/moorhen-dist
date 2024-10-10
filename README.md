# moorhen-dist

A very simple example of deploying Moorhen with a static http server.

* `npm install && npm run build`
* `cd build`
* `python3 ../SimpleCrossOriginServer.py`

The last step is just an example and can be replaced by serving the `build` direcory however you wish.
However, note the required cross-origin headers:
```
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)
```

In express, you might have something like:
```
          exp.use(function(req, res, next) {
              res.header("Cross-Origin-Opener-Policy", "same-origin");
              res.header("Cross-Origin-Embedder-Policy", "require-corp");
              next();
          });
```
