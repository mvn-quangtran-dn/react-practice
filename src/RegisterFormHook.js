import React, {useState} from 'react';
import UserRowHook from './UserRowHook.js';
import 'bootstrap/dist/css/bootstrap.css';


function RegisterFormHook() {

    const [form, setForm] = useState({
        'email': null,
        'password': null,
        'country': null,
        'gender': '0',
        'info': null,
    });
    const [users, setUser] = useState([]);
    const [id, setId] = useState(1);

    function changeHandler(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked :target.value;
        setForm({...form, [name]: value});
    }
    function submitHandler(e) {
        e.preventDefault();
        setId(id + 1);
        const user = {...form , id: id };
        setUser([...users, user]);
    }
    function removeHandler(id) {
        const userFilter = users.filter(e => e.id !== id);
        setUser(userFilter);
    }
    return (
        <div className="">
            <h3>Register User</h3>
            <form className="register-group" onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" name="email" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <select name="country" onChange={changeHandler} className="form-control">
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
                            onChange={changeHandler}
                            defaultChecked={form.gender === '0'}/>
                            Male
                        </label>
                        <label>
                        <input 
                            type="radio" 
                            value="1" 
                            name="gender"
                            onChange={changeHandler}
                            defaultChecked={form.gender === '1'}/>
                            Female
                        </label>

                    </div>
                </div>
                <div className="form-group">
                    <label >Information</label>
                    <input type="text" name="info" className="form-control" onChange={changeHandler}/>
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
                            <UserRowHook key={e.id} data={e} remove={removeHandler}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
export default RegisterFormHook;