export default function Footer() {
  return (
    <footer className="w-full py-6 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-slate font-mono hover:text-cyan transition-colors">
          Designed By Thanh
        </p>
        <p className="text-xs text-light-slate font-mono">
          © {new Date().getFullYear()} Thanh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
