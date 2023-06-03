import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

import AppLayout from "./Layout";

import Roles from "./pages/settings/Roles";
import Teaching from "./pages/teachers/Teaching";
import NonTeaching from "./pages/teachers/NonTeaching";
import Parents from "./pages/parents/Parents";
import Library from "./pages/library/Library";
import Forum from "./pages/forum/Forum";
import CustomizeApp from "./pages/settings/CustomizeApp";
import Payroll from "./pages/finance/Payroll";
import Students from "./pages/students/Students";
import SchoolFees from "./pages/finance/SchoolFees";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Router>
        <AppLayout>
          <Routes>
            <Route index element={<Login />} />
          </Routes>
          <Routes>
            <Route path=":userId" element={<AdminDashboard />} />
          </Routes>
          <Routes>
            <Route path=":userId/students" element={<Students />} />
          </Routes>
          <Routes>
            <Route path=":userId/parents" element={<Parents />} />
          </Routes>
          <Routes>
            <Route path=":userId/teaching" element={<Teaching />} />
          </Routes>
          <Routes>
            <Route path=":userId/non-teaching" element={<NonTeaching />} />
          </Routes>
          <Routes>
            <Route path=":userId/library" element={<Library />} />
          </Routes>
          <Routes>
            <Route path=":userId/payroll" element={<Payroll />} />
          </Routes>
          <Routes>
            <Route path=":userId/school-fees" element={<SchoolFees />} />
          </Routes>
          <Routes>
            <Route path=":userId/forum" element={<Forum />} />
          </Routes>
          <Routes>
            <Route path=":userId/roles" element={<Roles />} />
          </Routes>
          <Routes>
            <Route path=":userId/customize-app" element={<CustomizeApp />} />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
