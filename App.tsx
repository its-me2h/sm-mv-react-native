import React from 'react'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainView } from './src/views/MainView'

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainView />
      </QueryClientProvider>
    </Provider>
  )
}
