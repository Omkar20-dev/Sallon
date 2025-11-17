// src/pages/Profile/Profile.tsx

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProfileApi,
  updateProfileApi,
  getMyBookingsApi,
} from "@/lib/api/auth";
import { Link } from "react-router-dom";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { BookingList } from "@/components/profile/BookingList";

const Profile = () => {
  const queryClient = useQueryClient();

  /** Fetch Profile **/
  const { data: profileData, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
  });

  /** Fetch Bookings **/
  const {
    data: bookingData,
    isLoading: bookingLoading,
    error: bookingError,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getMyBookingsApi,
  });

  /** Update Profile **/
  const updateMutation = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => queryClient.invalidateQueries(["profile"]),
  });

  if (isLoading)
    return <p className="text-center mt-20 text-gray-600">Loading profile...</p>;

  if (error || !profileData?.user)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-lg font-medium">
          Failed to load profile
        </p>
        <Link
          to="/"
          className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Go Home
        </Link>
      </div>
    );

  const user = profileData.user;

  /** Default form values **/
  const defaultValues = {
    address: user.address || "",
    city: user.city || "",
    state: user.state || "",
    zipCode: user.zipCode || "",
  };

  /** Submit handler **/
  const handleSubmit = (values: any) => updateMutation.mutate(values);

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4 mb-20">

      {/* ===== GRID WRAPPER ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">

        {/* ===== LEFT PROFILE CARD ===== */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100">
          <ProfileHeader name={user.name} email={user.email} />

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Details
            </h3>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-gray-700">
                <strong>City:</strong> {user.city || "Not added"}
              </p>
              <p className="text-gray-700 mt-1">
                <strong>State:</strong> {user.state || "Not added"}
              </p>
              <p className="text-gray-700 mt-1">
                <strong>Zip:</strong> {user.zipCode || "Not added"}
              </p>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="lg:col-span-2 space-y-8">

          {/* UPDATE PROFILE CARD */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Update Information
            </h2>

            <ProfileForm
              defaultValues={defaultValues}
              loading={updateMutation.isLoading}
              onSubmit={handleSubmit}
            />
          </div>

          {/* BOOKINGS CARD */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Recent Bookings
            </h2>

            <BookingList
              loading={bookingLoading}
              error={bookingError}
              bookings={bookingData?.bookings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
