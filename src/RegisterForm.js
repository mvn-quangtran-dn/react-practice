import React from 'react';
import UserRow from './UserRow.js';
import 'bootstrap/dist/css/bootstrap.css';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                'email': null,
                'password': null,
                'country': null,
                'gender': '0',
                'info': null,
            },
            users: []
        };
        this.id = 0;
    }

    changeHandler = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked :target.value;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value

            }
        }), () => {});
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.id = this.id + 1;
        const user = {...this.state.form , id: this.id };
        this.setState(prevState => ({
            users: [
                ...prevState.users,
                user
            ]
        }), () => {});
    }
    removeHandler = (id) => {
        const userFilter = this.state.users.filter(e => e.id !== id);
        this.setState(prevState => ({
            users : userFilter
        }))
    }
    render() {
        const {form, users} = this.state;
        return (
            <div className="">
                <h3>Register User</h3>
                <form className="register-group" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.changechangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label >Country</label>
                        <select name="country" onChange={this.changeHandler} className="form-control">
                            <option value="1">USA</option>
                            <option value="2">Japan</option>
                            <option value="3">VN</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label >Gender</label>
                        <div className="radio-group">
                            <label>
                            <input 
                                type="radio" 
                                value="0" 
                                name="gender" 
                                onChange={this.changeHandler}
                                defaultChecked={form.gender === '0'}/>
                                Male
                            </label>
                            <label>
                            <input 
                                type="radio" 
                                value="1" 
                                name="gender"
                                onChange={this.changeHandler}
                                defaultChecked={form.gender === '1'}/>
                                Female
                            </label>

                        </div>
                    </div>
                    <div className="form-group">
                        <label >Information</label>
                        <input type="text" name="info" className="form-control" onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div className="form-group">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Info</th>
                                <th scope="col">Action</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {
                                users.map(e => (
                                <UserRow key={e.id} data={e} remove={this.removeHandler}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}
export default RegisterForm;