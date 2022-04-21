import { ApolloClient , InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri : 'https://rickandmortyapi.com/graphql',
    cache : new InMemoryCache(),
    cors:{
        origin:'https://rick-and-morty-app-ashy.vercel.app/',
        credentials:true,
    },
})

export default client 