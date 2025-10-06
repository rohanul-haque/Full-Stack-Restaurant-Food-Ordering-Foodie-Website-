import Navbar from "@/components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <main className="container mx-auto px-4 lg:px-8">
      <Navbar />
      {children}
    </main>
  );
};

export default AppLayout;
