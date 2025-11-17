import { BookingCard } from "./BookingCard";

export const BookingList = ({ loading, error, bookings }: any) => {
  if (loading) return <p className="text-gray-500">Loading bookings...</p>;
  if (error) return <p className="text-red-500">Failed to load bookings.</p>;

  return bookings?.length > 0 ? (
    <div className="space-y-4">
      {bookings.map((b: any) => (
        <BookingCard key={b._id} booking={b} />
      ))}
    </div>
  ) : (
    <p className="text-gray-600">You have no bookings yet.</p>
  );
};
