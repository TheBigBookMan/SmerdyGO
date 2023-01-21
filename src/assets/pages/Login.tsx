const Login = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen bg-gradient-to-br from-amber-100 to-red-100">
      <h1 className="font-bold text-6xl">Welcome to SmerdyGO</h1>
      <p>Sign up. Track anything. Update everything.</p>
      <div className="flex gap-12">
        <button className="font-bold text-3xl bg-gradient-to-br from-cyan-300 to-blue-300 p-4 rounded-xl">
          Login
        </button>
        <button className="font-bold text-3xl bg-gradient-to-r from-cyan-300 to-blue-300 p-4 rounded-xl">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
