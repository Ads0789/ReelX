const DashboardSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8 animate-pulse">
      {/* Page title indicator */}
      <div className="flex justify-center mb-8">
        <span className="text-sm text-gray-400 font-medium px-4 py-1 bg-gray-100 rounded-full">
          Dashboard page coming soon
        </span>
      </div>

      {/* Dashboard content skeleton */}
      <div className="grid grid-cols-2 gap-4">
        <div className="h-48 bg-gray-200 rounded-md"></div>
        <div className="h-48 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;