const UploadSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8 animate-pulse">
      {/* Page title indicator */}
      <div className="flex justify-center mb-8">
        <span className="text-sm text-gray-400 font-medium px-4 py-1 bg-gray-100 rounded-full">
          Upload page coming soon
        </span>
      </div>

      {/* Upload form skeleton */}
      <div className="space-y-4">
        <div className="h-10 bg-gray-200 rounded-md w-full"></div>
        <div className="h-40 bg-gray-200 rounded-md w-full"></div>
        <div className="h-10 bg-gray-200 rounded-md w-1/4"></div>
      </div>
    </div>
  );
};

export default UploadSkeleton;