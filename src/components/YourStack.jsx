const YourStack = ({ stack, onRemoveItem, onRemoveAll }) => {
  const isStackEmpty = stack.length === 0;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs sticky top-24">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
        <p className="text-xs text-slate-400 mt-1">
          {isStackEmpty
            ? 'No technologies selected yet.'
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      {/* Conditional Rendering: Empty State vs Stack Items List */}
      {isStackEmpty ? (
        <div className="mt-5 border border-dashed border-slate-200 rounded-xl py-10 px-4 flex items-center justify-center text-center">
          <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-2.5">
          {/* List of Stack Items */}
          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
            {stack.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-100 rounded-xl p-2.5 flex items-center justify-between hover:border-slate-200 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 p-1">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Remove Single Item Button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  type="button"
                  className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 w-6 h-6 rounded flex items-center justify-center transition-colors cursor-pointer text-xs"
                  aria-label={`Remove ${item.name}`}
                  title={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            type="button"
            className="mt-4 w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-semibold text-xs rounded-xl transition-all cursor-pointer text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
