import { ReduxProvider, RouterProvider } from "./providers";

function App() {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
}

export default App;
