import React from 'react'
class Home extends React.Component{
    render() {
        return(
            <div className='container-fluid-row'>
                <div className='col-md-8 offset-md-2'>
                <div className='card'>
                <div className='card-header bg-custom'>
                    <h2 className="text-center">Welcome to E Member Registry</h2>
                </div>
                </div>
                    <br/>
                    <h5 className='text-center'> If your name contains the letter "e" become a member today!</h5>
                </div>
            </div>
        )
    }
}
export default Home;