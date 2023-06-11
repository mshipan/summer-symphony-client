import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRoles = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: roles, isLoading: rolesLoading } = useQuery({
    queryKey: ["roles", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [roles, rolesLoading];
};

export default useRoles;
