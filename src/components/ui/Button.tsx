type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary" };
export default function Button({ variant="primary", className="", ...rest }: Props) {
  const base = "px-4 py-2 rounded-lg text-sm font-medium transition-transform active:scale-[.98]";
  const styles = variant === "primary"
    ? "bg-brand-100 text-brand-950 hover:brightness-95"
    : "bg-white/10 text-brand-100 border border-white/15 hover:bg-white/15";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
