import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import { getUserInfoData } from "@/Services/userinfoData";
import { UserInfo } from "@/types/userinfo";

const SettingsPage = () => {
  const Tabledata = getUserInfoData();

  return (
    <div>
      <Drawer />
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-5">
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
              <h2 className="text-lg font-semibold text-gray-800">
                Profile Image
              </h2>
              <button className="mt-2 px-4 py-2 text-sm border rounded mr-2 text-gray-800 hover:bg-gray-200">
                Upload New Photo
              </button>
              <button className="mt-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100">
                Remove Photo
              </button>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="mb-8 p-6 border rounded-lg bg-white shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Change Password
            </h2>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-3 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
              />
              <input
                type="Location"
                placeholder="Location"
                className="w-full p-3 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
              />
              <input
                type="Email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
              />
            </div>
            <button className="mt-4 px-4 py-2 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700">
              Save
            </button>
          </div>

          {/* Display-Only User Information */}
          <div className="mb-8 p-6 border rounded-lg bg-gray-50 shadow-inner">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              User Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              <div>
                <label className="font-medium">First Name</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID}
                  >
                    {user.firstName}
                  </p>
                ))}
              </div>
              <div>
                <label className="font-medium">Last Name</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID + "-last"}
                  >
                    {user.lastName}
                  </p>
                ))}
              </div>
              <div>
                <label className="font-medium">Username</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID + "-username"}
                  >
                    {user.username}
                  </p>
                ))}
              </div>
              <div>
                <label className="font-medium">Email</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID + "-email"}
                  >
                    {user.email}
                  </p>
                ))}
              </div>
              <div>
                <label className="font-medium">Phone</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID + "-phone"}
                  >
                    {user.phone}
                  </p>
                ))}
              </div>
              <div className="sm:col-span-2">
                <label className="font-medium">Location</label>
                {Tabledata.map((user: UserInfo) => (
                  <p
                    className="mt-1 p-2 border rounded bg-white"
                    key={user.employeeID + "-address"}
                  >
                    {user.address}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-2 px-4 py-2 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
