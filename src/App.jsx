import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

const Layout = lazy(() => import('./components/Layout/Layout'));

const loaderWrapStyle = {
  backgroundColor: '#173D3359',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function App() {
  return (
    <Suspense
      fallback={
        <CirclesWithBar
          height="100"
          width="100"
          color="#97D28B"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={loaderWrapStyle}
          visible={true}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
