import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import UseUserContext from "../context/UserContext";

const Signup = () => {
  const [formDetails, setFormDetails] = useState<UserForm>({
    email: "",
    password: "",
  });
  const { signUpUser, loading } = UseUserContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  //!!! UPDATE ANY
  const submitLogin = (e: any) => {
    e.preventDefault();
    signUpUser({ ...formDetails });
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen bg-gradient-to-br from-amber-100 to-red-100">
      <Link to="/">
        <BsArrowLeftShort className="absolute top-10 left-10 text-6xl hover:border-2 hover:rounded-2xl hover:shadow-lg hover:border-gray-500 transition-all cursor-pointer" />
      </Link>
      <h1 className="font-bold text-6xl">Signup</h1>
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
            className="flex justify-center items-center font-bold text-xl bg-gradient-to-br from-emerald-200 to-green-200 p-4 rounded-xl w-[120px] h-[50px] "
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
