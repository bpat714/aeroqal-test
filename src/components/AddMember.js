import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class AddMember extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            txt_name: "",
            txt_age: "",
            err_msg_name: '',
            err_msg_age: '',
            name_flag: false,
            age_flag: false,
            success_msg: '',
            err_msg: '',
        };
    }

    changeValue = (event) => {
        const fieldName = event.target.name;
        switch(fieldName) {
            case "name":
                console.log(event.target.value);
                this.setState({txt_name: event.target.value})
                this.validateName(event.target.value)
                break;
            case "age":
                this.setState({txt_age: event.target.value})
                this.validateAge(event.target.value)
                break;
            default:

        }
    }

    validateName = (value) => {
        try{
            if(!isNaN(value)) {
                this.setState({err_msg_name: "Need to enter name"})
                this.setState({name_flag: false})
            } else if (!value.includes('E') && (!value.includes('e'))){
                this.setState({err_msg_name: "Name must contain an 'e' to join E Member Club"})
                this.setState({name_flag: false})
            } 
            else {
                console.log(this.state.name_flag)
                this.setState({err_msg_name: ""})
                this.setState({name_flag: true})
            }
        }
        catch (error) {
            this.setState({err_msg_name: "Invalid Name"})
            this.setState({name_flag: false})
        }
    }

    validateAge = (value) => {
        try{
            if(isNaN(value)) {
                this.setState({err_msg_age: "Need to enter age"})
                this.setState({age_flag: false})
            }
            else if (Number(value) < 1) {
                this.setState({err_msg_age: "Invalid Age"})
                this.setState({age_flag: false})
            }
            else {
                console.log(this.state.age_flag);
                this.setState({err_msg_age: ""})
                this.setState({age_flag: true})
            }
        }
        catch (error) {
            this.setState({err_msg_age: "Invalid Age"})
            this.setState({age_flag: false})
        }
    }

    addMember = (event) => {
        if(this.state.name_flag === false) {
            this.validateName(this.state.txt_name)
        }
        if(this.state.age_flag === false) {
            this.validateAge(this.state.txt_age)
        }
        if( this.state.name_flag && this.state.age_flag) {
            this.addMemberToAPI();
        } 
        else {
            event.preventDefault();
        }
    }

    addMemberToAPI = () => {
        var formJSON = {
            id: 1,
            name: this.state.txt_name,
            age: parseInt(this.state.txt_age)
        };
        const data = JSON.stringify(formJSON);
        console.log(data);
        fetch('/People', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  data
           })
            .then(response => {
                console.log(response.status);
                if(response.status === 200){
                    this.setState({success_msg: "Entry successfully submited :)"})
                    console.log(this.state.success_msg);
                } else {
                    this.setState({err_msg: "Entry not submitted due to error, try again!"})
                }
            });
    }

    render() {
        return(
            <div className='container-fluid-row'>
                <div className='col-md-8 offset-md-2'>
                <div className='card'>
                <div className='card-header bg-custom'>
                    <h2 className="text-center">E Member Registration</h2>
                </div>
                <div className='card-body'>
                    <form className='form'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' value={this.state.txt_name} onChange={this.changeValue} className='form-control'/>
                            <span className='text-danger'>{this.state.err_msg_name}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='age'>Age</label>
                            <input type='text' name='age' value={this.state.txt_age} onChange={this.changeValue} className='form-control'/>
                            <span className='text-danger'>{this.state.err_msg_age}</span>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <button type='button' className='form-control btn btn-primary' onClick={this.addMember} >Add Member</button>
                        </div>
                        <span className='text-success'>{this.state.success_msg}</span>
                        <span className='text-danger'>{this.state.err_msg}</span>
                    </form>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default AddMember;