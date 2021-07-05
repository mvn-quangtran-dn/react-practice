import React from 'react';

function UserRowHook(props) {

    const {data} = props;
    return (
            <tr>
                <td >{data.id}</td>
                <td >{data.email}</td>
                <td >{data.country === '1' ? 'USA' : data.country === '2' ? 'Japan' : data.country === '3' ? 'VN': ''}</td>
                <td >{data.gender === '0' ? 'Male' : data.gender === '1' ? 'Female': ''}</td>
                <td >{data.info}</td>
                <td >
                    <button onClick={()=> props.remove(data.id)}>Remove</button>
                </td>
            </tr>
    );
}
export default UserRowHook;