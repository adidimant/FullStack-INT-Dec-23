export const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Profile</h1>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-xl font-semibold">Guest User</h2>
            <p className="text-gray-600">Travel Enthusiast</p>
          </div>
        </div>
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Travel Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-gray-600">Countries Visited</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-gray-600">Reviews Written</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-gray-600">Photos Shared</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};