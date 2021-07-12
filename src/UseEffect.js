import React , {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const UseEffectDemo = () => {

    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
        .then(e => {
            console.log(page, e.data);
            setUsers(e.data);
            setTotalPage(e.total_pages);
        })
    }, [page]);

    function handlePageChange(i) {
        console.log('changepage'+i.target.innerText);
        setPage(Number(i.target.innerText));
    }
    function movePeriousPage() {
        setPage((page) =>  page - 1);
    }
    function moveNextPage(){
        setPage((page) => page + 1);
        console.log('next'+page);
    }
    var pagination=[];
    for (let i=1 ; i<= totalPage; i++) {
        console.log('page'+page);
        pagination.push(<li key={i}  className={page === i ? 'active': ''} onClick={handlePageChange}>{i}</li>)
    }

    return (
        <div className="form-group">
            <h1>List User</h1>
            <div className="form-group">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Avatar</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            users.map(e => (
                                <tr>
                                    <td >{e.id}</td>
                                    <td >{e.email}</td>
                                    <td >{e.first_name}</td>
                                    <td >{e.last_name}</td>
                                    <td ><img src={e.avatar} alt={e.last_name}/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination g">
                    <li className={page === 1 ? 'disabled': ''} onClick={movePeriousPage}>Previous</li>
                    {pagination}
                    <li className={page === totalPage ? 'disabled': ''} onClick={moveNextPage}>Next</li>
                </ul>
            </nav>
        </div>
    );
}
export default UseEffectDemo