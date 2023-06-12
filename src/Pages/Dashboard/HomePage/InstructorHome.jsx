import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Instructor Home | Dashboard </title>
      </Helmet>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-Spicy mb-3">Instructor Dashboard</h1>
        <h1 className="text-lg font-OpenSans">
          Wellcome back, {user.displayName}
        </h1>
      </div>
    </>
  );
};

export default InstructorHome;
