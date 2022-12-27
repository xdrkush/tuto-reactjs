import AdminLayout from "../layouts/AdminLayout";
import withAdmin from "../components/login/withAdmin";

const AdminPage = () => {
  return (
    <AdminLayout>
      <h2>AdminPage</h2>
    </AdminLayout>
  );
};

export default withAdmin(AdminPage);
