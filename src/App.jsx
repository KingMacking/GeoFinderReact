import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
    const client = new QueryClient({defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }})
    return (
        <main className="h-full min-h-screen text-black transition-colors duration-200 ease-in-out bg-white dark:text-white dark:bg-black">
            <QueryClientProvider client={client}>
                <Main />
            </QueryClientProvider>
            <Footer />
        </main>
    )
}

export default App
