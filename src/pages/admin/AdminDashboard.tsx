import { useParams } from "react-router-dom";
import { useState } from "react";

const AdminDashboard: React.FC = () => {
  const { adminId } = useParams();

  return <h2>This is my admin dashboard</h2>;
};

export default AdminDashboard;
