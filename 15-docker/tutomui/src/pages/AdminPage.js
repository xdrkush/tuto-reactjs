import AdminLayout from "../layouts/AdminLayout";
import withAdmin from "../components/login/withAdmin";

const AdminPage = () => {
  return (
    <AdminLayout>
      <h1>Admin</h1>
    </AdminLayout>
  );
};

export default withAdmin(AdminPage);
