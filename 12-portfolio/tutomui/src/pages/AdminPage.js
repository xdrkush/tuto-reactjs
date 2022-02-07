import withAdmin from "../components/login/withAdmin";

import Create from "../components/admin/Create";

const AdminPage = () => {
  const data = {
    address: "22 rue des olivettes",
    phone: "06.21.25.32.25",
    mail: "machin@truc.fr",
  };

  return <h1>Admin</h1>;
};

// export default withAdmin(AdminPage);
export default AdminPage;
