import Link from "next/link";
export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link href="/" aria-label="TORRAYZ STUDIO - home" className={`brand${compact ? " brand-compact" : ""}`}>
    <span className="brand-symbol" aria-hidden="true"><svg width="39" height="33" viewBox="0 0 64 50" fill="none"><defs><linearGradient id="brandGradient" x1="6" y1="3" x2="52" y2="50"><stop stopColor="#c3fbff"/><stop offset=".37" stopColor="#6c9fff"/><stop offset=".67" stopColor="#e1ecff"/><stop offset="1" stopColor="#3955ec"/></linearGradient></defs><path d="M11 6h50L54 18H39L24 46H10L25 18H4z" fill="url(#brandGradient)"/><path d="M11 6h49" stroke="#fff" strokeOpacity=".7" strokeWidth="2"/></svg></span>
    {!compact && <span className="brand-text"><strong>TORRAYZ <i>/</i> STUDIO</strong><small>ENGINEERED TO CREATE</small></span>}
  </Link>;
}