import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfileApi, updateProfileApi } from "@/lib/api/auth";

export const useProfile = () => {
  const queryClient = useQueryClient();

  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
  });

  const updateMutation = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });

  return { profileQuery, updateMutation };
};
