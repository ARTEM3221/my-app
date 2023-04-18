const Transaction = (props) => (
    <div>
          Label: {props.transactions.label}
          <p>Value: {props.transactions.value}</p>
          <br/>
    </div>
);

export default Transaction;