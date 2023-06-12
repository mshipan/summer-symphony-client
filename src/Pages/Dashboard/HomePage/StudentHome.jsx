import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const StudentHome = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Student Home | Dashboard </title>
      </Helmet>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-Spicy mb-3">Student Dashboard</h1>
        <h1 className="text-lg font-OpenSans">
          Wellcome back, {user.displayName}
        </h1>
      </div>
    </>
  );
};

export default StudentHome;
