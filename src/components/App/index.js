import React from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';


class App extends React.Component{
    constructor(){
        super();

        this.state = {
            balance: 0,
            transactions: []
        }

        this.onChange =this.onChange.bind(this)
        console.log('constructor')
    }


    onChange = (value) => {
      this.setState((state) => ({
        balance: state.balance + Number(value),
        transactions: [{value, label: 'change'}, ...state.transactions]
      }))
    }
    

    render(){
      return (
        <>
          <Balance balance={this.state.balance}/>
          <Form onChange={this.onChange}/>
          <hr/>
          <Transactions transactions={this.state.transactions}/>
        </>
        )
      }
    }


  export default App;