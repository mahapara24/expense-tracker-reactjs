import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-between">
          {" "}
          <h2 className="mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl  ">
            Expense Tracker
          </h2>
          <div className="flex">
            <p>Your Balance</p>
            <p>0</p>
          </div>
          <div className="">
            <div className="flex">
              <p>Income</p>
              <p>0</p>
            </div>
            <div className="flex">
              <p>Expense</p>
              <p>0</p>
            </div>
          </div>
          <form onSubmit={onSubmit} action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense"> Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income"> Income</label>

            <button
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              type="submit"
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>

      {/* transactions */}
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <li>
                {" "}
                <h4> {description} </h4>{" "}
                <p>
                  RS. {transactionAmount} .{" "}
                  <label htmlFor="">{transactionType}</label>{" "}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
