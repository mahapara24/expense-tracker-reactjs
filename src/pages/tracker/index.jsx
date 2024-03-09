import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetuserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetuserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
    setDescription("");
    setTransactionAmount(0);
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-gray-900 bg-gray-100 p-4 ">
        <div className="flex  flex-col items-center justify-between p-2 py-4">
          {" "}
          <h2 className="mb-4 text-xl font-poppins font-medium text-black flex text-center leading-none tracking-tight md:text-2xl lg:text-4xl  ">
            {name}'s Expense Tracker
            {profilePhoto && (
              <div className="ml-8 ">
                <img
                  className="sm:h-20 h-12  rounded-[50px]"
                  src={profilePhoto}
                />
                <button
                  className="text-white bg-gray-700 font-poppins  hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium sm:rounded-full rounded-lg text-[8px] m-2 py-1 sm:text-sm sm:px-3 sm:py-2 text-center  sm:mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                  onClick={signUserOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </h2>
          <div className="   rounded-lg p-4 px-8">
            <div className="flex justify-between space gap-2 font-poppins  items-center  sm:text-3xl text-xl  font-medium">
              <p>Your Balance</p>
              {balance >= 0 ? (
                <p className="ml-4 p-2  font-poppins font-medium">
                  Rs.{balance}
                </p>
              ) : (
                <p className="ml-4 p-2 font-poppins font-medium">
                  {" "}
                  - Rs.{balance * -1}
                </p>
              )}
            </div>
            <div className="">
              <div className="flex justify-between items-center font-poppins font-medium sm:text-3xl text-xl">
                <p>Income </p> <p className="ml-4 p-2"> Rs.{income}</p>
              </div>
              <div className="flex justify-between  gap-x-3 font-poppins font-medium items-center sm:text-3xl text-xl">
                <p>Expense </p>
                <p className="ml-4 p-2"> Rs.{expenses}</p>
              </div>
            </div>
          </div>
          <form
            className="space-x-1 py-4 text-gray-900 "
            onSubmit={onSubmit}
            action=""
          >
            <input
              className="mb-2 w-[100px] p-2 sm:w-60 rounded-md sm:p-2  border border-gray-300 bg-slate-200 text-gray-900"
              type="text"
              name=""
              value={description}
              id=""
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className=" mb-2 w-[80px] p-2 sm:w-60 rounded-md sm:p-2  border border-gray-300 bg-slate-200 text-gray-900"
              type="number"
              name=""
              value={transactionAmount}
              id=""
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              className=""
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="sm:text-lg text-sm" htmlFor="expense">
              {" "}
              Expense
            </label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="sm:text-lg text-sm" htmlFor="income">
              {" "}
              Income
            </label>
            <div className="flex justify-center items-center pt-4">
              <button
                className="text-white items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* transactions */}
      <div className="grid grid-cols-3 bg-gray-200 sm:grid-cols-4 gap-4">
        <h2 className="col-span-3 sm:col-span-4 text-center text-gray-900 font-poppins font-medium sm:text-3xl text-xl py-4">
          Transactions
        </h2>
        {transactions.map((transaction, index) => {
          const { description, transactionAmount, transactionType } =
            transaction;
          return (
            <div key={index} className=" py-2 justify-center rounded-lg">
              <ul className="">
                <li className="bg-gray-300 font-poppins font-medium sm:text-xl text-xl p-4 px-6 rounded-lg my-3 flex flex-col items-center">
                  <h4 className="mb-2">{description}</h4>
                  <p>
                    RS. {transactionAmount}{" "}
                    <label
                      style={{
                        color: transactionType === "expense" ? "red" : "green",
                      }}
                    >
                      {transactionType}
                    </label>{" "}
                  </p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
