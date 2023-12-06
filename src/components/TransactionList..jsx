function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Paycheck <span>$9999</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
