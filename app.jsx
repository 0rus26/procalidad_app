import React from "React";
import ReactDOMServer from "ReactDOMServer";
import { serve } from "deno_http/server.ts";

const App = (a) => {
  return (
    <React.Fragment>
      <h1>React App with Deno</h1>
    </React.Fragment>
  );
};

const body = ReactDOMServer.renderToString(<App />);
const s = serve({ port: 8080 });
console.log("Server running at http://localhost:8080/");

for await (const req of s) {
  req.respond({ body });
}