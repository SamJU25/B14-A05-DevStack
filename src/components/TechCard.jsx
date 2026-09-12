const TechCard = ({ tech, onAddToStack, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  // Helper function for badge colors
  const getBadgeStyle = (badgeName) => {
    switch (badgeName?.toLowerCase()) {
      case 'popular':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'fast':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'top sql':
        return 'bg-sky-50 text-sky-600 border-sky-200';
      case 'cache':
        return 'bg-rose-50 text-rose-600 border-rose-200';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'essential':
        return 'bg-indigo-50 text-indigo-600 border-indigo-200';
      case 'robust':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'modern':
        return 'bg-teal-50 text-teal-600 border-teal-200';
      case 'containers':
        return 'bg-sky-50 text-sky-600 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top: Tech Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 p-2 group-hover:scale-105 transition-transform">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                badge
              )}`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Tech Title & Description */}
        <h3 className="text-base font-bold text-slate-900 mt-4 tracking-tight">{name}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2 min-h-[32px]">
          {description}
        </p>

        {/* Metadata: Category, Difficulty, Rating */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded text-[11px] font-medium border border-slate-100">
            {category}
          </span>
          <span className="text-[11px] text-slate-500">{difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700 text-xs">
            <span className="text-amber-400">★</span> {rating}
          </span>
        </div>
      </div>

      {/* Action Button: Add to Stack */}
      <div className="mt-4">
        <button
          id={`tech-btn-${tech.id}`}
          onClick={() => onAddToStack(tech)}
          type="button"
          className={`w-full py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99] cursor-pointer'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
