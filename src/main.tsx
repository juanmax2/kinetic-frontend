import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App.tsx'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(

    <ErrorBoundary>
      <QueryClientProvider client={client}> 
        <App/>
      </QueryClientProvider>
    </ErrorBoundary>

)
