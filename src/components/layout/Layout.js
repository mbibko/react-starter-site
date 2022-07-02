import { MainNavigation } from "./MainNavigation";

export function Layout({ children }) {
  return (
    <div className="container">
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}
