import { ChangeEvent, useState } from "react";

const Login = () => {
  const [formDetails, setFormDetails] = useState<UserForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  //!!! UPDATE ANY
  const submitLogin = (e: any) => {
    e.preventDefault();
    console.log(formDetails);
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen bg-gradient-to-br from-amber-100 to-red-100">
      <h1 className="font-bold text-6xl">Welcome to SmerdyGO</h1>
      <p>Sign up. Track anything. Update everything.</p>
      <form className="flex flex-col gap-10 items-center">
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          value={formDetails.email}
          placeholder="email"
          className="pl-2 p-1 rounded-lg"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={formDetails.password}
          placeholder="password"
          className="pl-2 p-1 rounded-lg"
        />
        <div className="flex gap-10">
          <button
            onClick={(e) => submitLogin(e)}
            className="flex justify-center items-center font-bold text-xl bg-gradient-to-br from-cyan-300 to-blue-300 p-4 rounded-xl w-[120px] h-[50px] "
          >
            Login
          </button>
          <button className="flex justify-center items-center font-bold text-xl bg-gradient-to-br from-cyan-300 to-blue-300 p-4 rounded-xl w-[120px] h-[50px]">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
