import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import CatInformation from './pages/CatInformation/CatInformation';
import CatsGallery from './pages/CatsGallery/CatsGallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { media } from './styles-constants';

const App = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30_000,
          },
        },
      })
  );

  console.log(media);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatsGallery />} />
          <Route path="/catInformation" element={<CatInformation />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
