import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Main from "./components/Main/Main"

function App() {
    const client = new QueryClient({defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }})
    return (
        <>
            <QueryClientProvider client={client}>
                <Main />
            </QueryClientProvider>
        </>
    )
}

export default App
