import React from 'react'

class DeleteMember extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            txt_id: "",
            err_msg_id: "",
            id_flag: false,
            success_msg: "",
            error_msg: "",
        };
    }

    changeValue = (event) => {
        const fieldName = event.target.name;
        this.setState({txt_id: event.target.value})
        this.validateId(event.target.value)
    }

    validateId = (value) => {
        try{
            if(!Number.isInteger(parseInt(value))) {
                this.setState({err_msg_id: "Id needs to be a number"})
                this.setState({id_flag: false})
            }
            else {
                console.log(this.state.id_flag)
                this.setState({err_msg_id: ""})
                this.setState({id_flag: true})
            }
        }
        catch (error) {
            this.setState({err_msg_id: "Invalid Name"})
            this.setState({id_flag: false})
        }
    }

    deleteMember = (event) => {
        const flag = window.confirm("Are you sure you want to delete member?")
        if(flag){
            this.deleteMemberAPI()
        }
    }

    deleteMemberAPI = () => {
        const deleteURL = '/People/' + "?id=" + this.state.txt_id;
            fetch( deleteURL, {method: 'DELETE'})
            .then(response => {
                console.log(response.status);
                if(response.status == 200){
                    this.setState({success_msg: "Entry deleted successfully :)"})
                    console.log(this.state.success_msg);
                } else {
                    this.setState({err_msg: "Entry not deleted due to error, try again!"})
                }
            });
    }
    render() {
        return(
            <div className='container-fluid-row'>
                <div className='col-md-8 offset-md-2'>
                <div className='card'>
                    <div className='card-header bg-custom'>
                        <h2 class="text-center">Delete Member Form</h2>
                    </div>
                    <div className='card-body'>
                        <form className='form'>
                            <div className='form-group'>
                                <label htmlFor='id'> E Member Id</label>
                                <input type='text' name='id' value={this.state.txt_id} onChange={this.changeValue} className='form-control'/>
                                <span className='text-danger'>{this.state.err_msg_id}</span>
                            </div>
                            <br></br>
                            <button type='button' className='form-control btn btn-primary' onClick={this.deleteMember}>Delete</button>
                            <span className='text-success'>{this.state.success_msg}</span>
                            <span className='text-danger'>{this.state.error_msg}</span>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default DeleteMember;