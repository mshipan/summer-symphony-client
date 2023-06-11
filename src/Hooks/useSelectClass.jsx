import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectClass = [] } = useQuery({
    queryKey: ["selectClass", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/selectClass?email=${user.email}`);
      return response.data;
    },
  });
  return [selectClass, refetch];
};

export default useSelectClass;
