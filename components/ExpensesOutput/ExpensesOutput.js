import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-22"),
  },
  {
    id: "e2",
    description: "Pants",
    amount: 590.99,
    date: new Date("2022-6-11"),
  },
  {
    id: "e3",
    description: "Hat",
    amount: 70.93,
    date: new Date("2022-9-17"),
  },
  {
    id: "e4",
    description: "Silk Scarf",
    amount: 359.99,
    date: new Date("2022-8-12"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
