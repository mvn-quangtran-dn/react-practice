import React from 'react';

class UserRow extends React.Component {
    removeHandler(id) {
        this.props.remove(id);
    }
    render() {
        const {data} = this.props;
        console.log(data);
        return (
                <tr>
                    <td >{data.id}</td>
                    <td >{data.email}</td>
                    <td >{data.country === '1' ? 'USA' : data.country === '2' ? 'Japan' : data.country === '3' ? 'VN': ''}</td>
                    <td >{data.gender === '0' ? 'Male' : data.gender === '1' ? 'Female': ''}</td>
                    <td >{data.info}</td>
                    <td >
                        <button onClick={()=> this.removeHandler(data.id)}>Remove</button>
                    </td>
                </tr>
        );
    }
}
export default UserRow;