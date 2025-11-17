import {
  Calendar,
  Clock,
  CheckCircle2,
  Loader2,
  XCircle,
  BadgeCheck,
} from "lucide-react";

interface BookingProps {
  booking: any;
}

export const BookingCard = ({ booking }: BookingProps) => {
  const statusStyles: any = {
    completed: {
      badge: "bg-green-100 text-green-700 border-green-300",
      icon: <CheckCircle2 className="w-4 h-4 text-green-700" />,
      glow: "from-green-400/40 to-emerald-500/40",
    },
    pending: {
      badge: "bg-yellow-100 text-yellow-700 border-yellow-300",
      icon: <Loader2 className="w-4 h-4 animate-spin text-yellow-700" />,
      glow: "from-yellow-300/40 to-orange-400/40",
    },
    cancelled: {
      badge: "bg-red-100 text-red-700 border-red-300",
      icon: <XCircle className="w-4 h-4 text-red-700" />,
      glow: "from-red-400/40 to-rose-500/40",
    },
  };

  const style = statusStyles[booking.status] || statusStyles.pending;

  return (
    <div className="relative group">
      {/* Smooth glow on hover */}
      <div className={`
        absolute -inset-1 rounded-2xl blur-xl opacity-0 
        group-hover:opacity-30 transition duration-700 
        bg-gradient-to-r ${style.glow}
      `}></div>

      {/* Main Card */}
      <div
        className="
          relative z-10 p-6 rounded-2xl
          bg-white/70 backdrop-blur-xl 
          border border-white/60 shadow-[rgba(0,0,0,0.06)_0px_4px_20px]
          transition-all duration-500
          hover:shadow-[rgba(0,0,0,0.15)_0px_8px_40px]
        "
      >
        {/* Left Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 rounded-l-xl"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
            {booking.service}
          </h3>

          {/* Status Badge */}
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-medium ${style.badge}`}
          >
            {style.icon}
            <span className="capitalize">{booking.status}</span>
          </div>
        </div>

        {/* Info List */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-pink-600" />
            <div>
              <p className="text-xs text-gray-500">Appointment Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-xs text-gray-500">Time</p>
              <p className="font-medium">{booking.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">Booking ID</p>
              <p className="font-medium tracking-wider">
                #{booking._id?.slice(-8).toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-gray-200/60 text-xs text-gray-500">
          Booked on:{" "}
          {new Date(booking.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};
