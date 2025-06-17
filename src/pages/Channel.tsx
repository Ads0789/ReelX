const ChannelSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8 animate-pulse">
      {/* Page title indicator */}
      <div className="flex justify-center mb-8">
        <span className="text-sm text-gray-400 font-medium px-4 py-1 bg-gray-100 rounded-full">
          Channel page coming soon
        </span>
      </div>

      {/* Channel header skeleton */}
      <div className="mb-8">
        <div className="h-24 bg-gray-200 rounded-md w-full"></div>
      </div>

      {/* Channel content skeleton */}
      <div className="grid grid-cols-3 gap-4">
        <div className="h-32 bg-gray-200 rounded-md"></div>
        <div className="h-32 bg-gray-200 rounded-md"></div>
        <div className="h-32 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ChannelSkeleton;