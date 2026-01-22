export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-center">
      <p className="text-bone/60 text-sm">
        {currentYear} Nicholas Conn
      </p>
    </footer>
  );
}
