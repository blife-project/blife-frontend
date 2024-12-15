const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden p-4 md:p-6 lg:p-0">
      {children}
    </div>
  );
};

export default AuthLayout;
