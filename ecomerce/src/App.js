import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Users = React.lazy(() => import("./Pages/Users"));
function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Suspense>
  );
}

export default App;
