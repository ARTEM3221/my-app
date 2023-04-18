import PropTypes from 'prop-types';

import {Wrapper} from './styles.js'


const Transaction = ({transaction: {value, label}}) => (
    <Wrapper value= {value}>
          Label: {label}
          <p>Value: {value}</p>
          <br/>
    </Wrapper>
);

Transaction.propTypes = {
    transactions: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
  }

Transaction.defaultProps = {
    transactions: {
        label: '',
        value: 0
    }
  }

export default Transaction;