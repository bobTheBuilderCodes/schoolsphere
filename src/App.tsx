import { Routes, Route } from "react-router-dom";
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
import Home from "./Home";
import Mother from "./pages/mother/Mother";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path=":userId" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="parents" element={<Parents />}>
            <Route index element={<Mother />} />
            <Route path="father" element={<h2>This is my father</h2>} />
            <Route path="guardian" element={<h1>This is my guardian</h1>} />
          </Route>
          <Route path="teaching" element={<Teaching />} />
          <Route path="non-teaching" element={<NonTeaching />} />
          <Route path="library" element={<Library />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="school-fees" element={<SchoolFees />} />
          <Route path="forum" element={<Forum />} />
          <Route path="roles" element={<Roles />} />
          <Route path="customize-app" element={<CustomizeApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
