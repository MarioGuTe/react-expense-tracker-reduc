import { legacy_createStore as createStore, combineReducers } from "redux";

const initialBalanceState = {
  balance: 0,
  income: 0,
  expense: 0,
};

const initialTransactionState = {
  text: "",
  amount: 0,
};

function balanceReducer(state = initialBalanceState, action) {
  switch (action.type) {
    case "balance/add":
      return {
        ...state,
        balance: state.balance + action.payload,
        income: state.income + action.payload,
      };
    case "balance/subtract":
      return {
        ...state,
        balance: state.balance + action.payload,
        expense: state.expense + action.payload,
      };
    default:
      return state;
  }
}

function transactionReducer(state = initialTransactionState, action) {
  switch (action.type) {
    case "transaction/text":
      return { ...state, text: action.payload.text };
    case "transaction/amount":
      return { ...state, amount: state.amount + action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  balance: balanceReducer,
  transaction: transactionReducer,
});

export const store = createStore(rootReducer);

store.dispatch({ type: "balance/add", payload: 1000 });
console.log(store.getState());
