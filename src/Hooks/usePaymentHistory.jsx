import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: paymentData = [] } = useQuery({
    queryKey: ["payment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(`/payments?email=${user.email}`);
      const sortedData = response.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      return sortedData;
    },
  });
  return [paymentData, refetch];
};

export default usePaymentHistory;
