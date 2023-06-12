import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-Spicy mb-3">Admin Dashboard</h1>
      <h1 className="text-lg font-OpenSans">
        Wellcome back, {user.displayName}
      </h1>
    </div>
  );
};

export default AdminHome;
