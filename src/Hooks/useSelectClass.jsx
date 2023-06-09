import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectClass = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: selectClass = [] } = useQuery({
    queryKey: ["selectClass", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/selectClass?email=${user.email}`
      );
      return response.json();
    },
  });
  return [selectClass, refetch];
};

export default useSelectClass;
