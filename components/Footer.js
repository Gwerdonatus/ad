export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container text-center text-sm opacity-70">
        © {new Date().getFullYear()} Gwer Dev — Built with Next.js • Tailwind • Motion
      </div>
    </footer>
  );
}
