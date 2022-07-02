export function Card({ children }) {
  return (
    <div style={{ boxShadow: "0 0.1rem 1rem 0.25rem rgb(0 0 0 / 5%)" }}>
      {children}
    </div>
  );
}
