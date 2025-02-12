import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import { WebSocketLink } from "@apollo/client/link/ws"

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
})

const wsLink = new WebSocketLink({
  uri: "ws://localhost:3000/graphql",
  options: {
    reconnect: true,
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === "OperationDefinition" && definition.operation === "subscription"
  },
  wsLink,
  httpLink,
)

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

