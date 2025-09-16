const AdminPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-dvh p-6 py-28 max-w-2xl gap-8 mx-auto">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <h1 className="text-5xl flex flex-col font-extrabold">
          Welcome back, Boss.
        </h1>

        <p className="text-muted-foreground font-secondary text-base sm:text-xl">
          What would you like to edit today?
        </p>
      </div>
    </div>
  );
};
export default AdminPage;
