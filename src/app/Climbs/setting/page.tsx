export default function SettingsPage() {
  return (
    <div className="bg-white min-h-screen p-5">
      <div className="bg-white shadow-md rounded-lg p-6 border">
        {/* Profile Image Section */}
        <div className="flex items-center mb-8">
          <button
            className="w-24 h-24 rounded-full border-2 border-gray-300 bg-cover bg-center hover:opacity-80"
            style={{ backgroundImage: "url('/user-profile.jpg')" }}
          >
            <span className="sr-only">User Profile</span>
          </button>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-black">Profile Image</h2>
            <button className="mt-2 px-4 py-2 text-sm border rounded mr-2 text-black hover:bg-gray-200">
              Upload New Photo
            </button>
            <button className="mt-2 px-4 py-2 text-sm text-black hover:bg-red-100">
              Remove Photo
            </button>
          </div>
        </div>
        {/* Change Password Section */}
        <div className="mb-8 p-6 border rounded-lg bg-white shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-black">
            Change Password
          </h2>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
            />
          </div>
          <button className="mt-4 px-4 py-2 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700">
            Save
          </button>
        </div>
        {/* User Information Section */}
        <div className="mb-8 p-6 border rounded-lg bg-white shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-black">
            User Information
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-100"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-100"
            />
            <input
              type="tel"
              placeholder="Cellphone Number"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-100"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-gray-100"
            />
          </div>
        </div>
        <button className="mt-2 px-4 py-2 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
