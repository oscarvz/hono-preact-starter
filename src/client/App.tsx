import { Route, Switch } from "wouter-preact";
import { Layout } from "./components";
import { About, Home } from "./pages";

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  );
}
