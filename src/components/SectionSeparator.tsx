const SectionSeparator = () => {
  return (
    <div className="relative py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          {/* Left line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          
          {/* Center decorative element */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rotate-45 bg-primary/60" />
            <div className="w-3 h-3 rotate-45 border border-primary/80 bg-primary/20" />
            <div className="w-2 h-2 rotate-45 bg-primary/60" />
          </div>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;
