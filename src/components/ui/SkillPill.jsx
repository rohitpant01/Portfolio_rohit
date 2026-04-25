export default function SkillPill({ children }) {
  return (
    <span className="px-4 py-2 bg-secondary/30 text-primary font-medium text-sm rounded-full shadow-sm">
      {children}
    </span>
  );
}