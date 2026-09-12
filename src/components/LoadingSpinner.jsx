const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* Animated Spinner with brand gradient border */}
      <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-pink-500 animate-spin mb-4" />
      <p className="text-sm font-medium text-slate-500">Loading technologies...</p>
    </div>
  );
};

export default LoadingSpinner;
