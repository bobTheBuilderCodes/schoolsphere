import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

import AppLayout from "./Layout";
import Schools from "./Schools";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <AppLayout>
        <Router>
          <Routes>
            <Route index element={<AdminLogin />} />
          </Routes>
          <Routes>
            <Route path="dashboard/:adminId" element={<AdminDashboard />} />
          </Routes>
          <Routes>
            <Route path="schools" element={<Schools />} />
          </Routes>
        </Router>
      </AppLayout>
    </div>
  );
}

export default App;
