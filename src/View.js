import React from 'react'

class View extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            tab: "",
        };
    }
    componentDidMount() {
        this.fetchCustomers();
    }

    fetchCustomers = () => {
        fetch('/People', {
            method: 'get',
        })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            const result = response;
            const tabRes = this.drawTable(result);
          this.setState({
            tab: tabRes,
            error: ""
          });
        })
    }

    drawTable = (result) => {
        var res = "";
        if(result.length > 0) {
            res = result.map(item => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>    
                <td>{item.age}</td>    
                </tr>
            ))
        } else {
            this.setState({error: "No records found"})
        }
        return res;
    }

    render() {

        return(
            <div>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <div className='card'>
                            <div className='card-header bg-custom'>
                                <h2 className="text-center"> E Member Registry: </h2>
                            </div>
                        </div>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Member ID</th>
                                    <th>Member Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>{this.state.tab}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default View;