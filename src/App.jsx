import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />s
          <Route path="/news" element={<News />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
