import { ApolloClient , InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri : process.env.REACT_APP_RICK_AND_MORTY_API,
    cache : new InMemoryCache(),
    cors:{
        origin:'https://rick-and-morty-app-ashy.vercel.app/',
        credentials:true,
    },
})

export default client 
