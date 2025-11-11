"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";

const AddNewUserComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [businessName, setBusinessName] = useState<string>("");
  const [msg, setMsg] = useState("");
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("/api/clients/insert-new-client", {
        name,
        email,
        businessName
      });
      console.log("response", response);
    } catch (error: any) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setBusinessName("");
      setIsLoading(false);
    }
  };
  return (
    <div className="min-w-lg bg-white dark:bg-black rounded-md">
      {isLoading && <LoadingScreen />}
      <form
        onSubmit={submitForm}
        className="flex flex-col p-3 gap-4 justify-center items-center"
      >
        <p className="text-lg text-black dark:text-white">Add New Client</p>
        <div className="flex w-3/4 justify-center items-center flex-row gap-4">
          <label htmlFor="anme" className="text-black">
            Enter Your Name
          </label>
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="custom-input"
          />
        </div>
        <div className="flex w-3/4 justify-center items-center flex-row gap-4">
          <label htmlFor="email" className="text-black">
            Enter Your Email
          </label>
          <input
            type="text"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="custom-input"
          />
        </div>
        <div className="flex w-3/4 justify-center items-center flex-row gap-4">
          <label htmlFor="businessName" className="text-black">
            Business Name
          </label>
          <input
            type="text"
            required
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="custom-input"
          />
        </div>
        <button
          type="submit"
          className="shadow-lg hover:shadow-xl hover:text-white hover:border-white hover:bg-black hover:translate-y-1.5 hoverEffect bg-white text-black border border-black rounded-md px-4 py-1.5"
        >
          {isLoading ? "Loading...." : "submit"}
        </button>
      </form>
      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
};

export default AddNewUserComponent;
