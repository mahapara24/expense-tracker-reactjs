import { useAddTransaction } from "../../hooks/useAddTransaction";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  return (
    <>
      <div>
        <div>
          {" "}
          <h2>Expense Tracker</h2>
          <div>
            <p>Your Balance</p>
            <p>0</p>
          </div>
          <div>
            <div>
              <p>Income</p>
              <p>0</p>
            </div>
            <div>
              <p>Expense</p>
              <p>0</p>
            </div>
          </div>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Description"
              required
            />
            <input type="number" name="" id="" placeholder="Amount" required />
            <input type="radio" id="expense" value="expense" />
            <label htmlFor="expense">Expense</label>
            <input type="radio" name="income" id="income" />
            <label htmlFor="income">Income</label>
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
      </div>
    </>
  );
};
