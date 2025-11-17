interface Props {
  name: string;
  email: string;
}

export const ProfileHeader = ({ name, email }: Props) => (
  <div className="bg-gray-50 p-5 rounded-lg border mb-8">
    <p className="text-gray-800 text-lg">
      <span className="font-semibold">Name:</span> {name}
    </p>
    <p className="text-gray-800 text-lg mt-1">
      <span className="font-semibold">Email:</span> {email}
    </p>
  </div>
);
