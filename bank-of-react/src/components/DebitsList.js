import React, { Component} from 'react';
import axios from 'axios';
import Debit from './Debit';
import AccountBalance from './AccountBalance';

class DebitsList extends Component {

    // when we mount this thing, initial state, make it empty
    state = {
        debits: []
    }    

    // fire off this method as soon as this component is mounted
    componentDidMount() {
        // .get returns a promise, so then resolve the promise
        axios.get('/debits')
            .then((response) => {
                // replace old state with new state
                this.setState({debits: response.data})
                // which automatically re-renders this.state.debris in render()
            });
    }

    
    // <p>{JSON.stringify(this.state.debits)}</p>
    render() { 

        const debitsComponent = this.state.debits.map((debit) => {
            return <Debit 
                description={debit.description}
                amount={debit.amount}
                date={debit.date}/>
       });

        return (
            <div>
                <h1>Debits</h1>
                <br></br>
                { debitsComponent }
                <br></br>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>

        )
    }

}

export default DebitsList;