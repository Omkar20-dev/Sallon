import { useQuery } from "@tanstack/react-query";
import { getMyBookingsApi } from "@/lib/api/auth";

export const useBookings = () => {
  return useQuery({
    queryKey: ["my-bookings"],
    queryFn: getMyBookingsApi,
  });
};
