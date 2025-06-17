const RegisterSkeleton = () => {
  return (
    <div className="w-full max-w-md mx-auto px-8 py-8 animate-pulse">
      {/* Page title indicator */}
      <div className="flex justify-center mb-8">
        <span className="text-sm text-gray-400 font-medium px-4 py-1 bg-gray-100 rounded-full">
          Register page coming soon
        </span>
      </div>

      {/* Registration form skeleton */}
      <div className="space-y-4">
        <div className="h-10 bg-gray-200 rounded-md w-full"></div>
        <div className="h-10 bg-gray-200 rounded-md w-full"></div>
        <div className="h-10 bg-gray-200 rounded-md w-full"></div>
        <div className="h-10 bg-gray-200 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};

export default RegisterSkeleton;