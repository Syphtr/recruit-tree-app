import Header from "@components/sections/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
