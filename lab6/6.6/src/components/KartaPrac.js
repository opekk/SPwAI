import 'bootstrap/dist/css/bootstrap.css';

function KartaPrac(props){
    return (
        <div className="col-lg-6 offset-lg-3 my-4 text-center">
            <table className="table table-sm table-bordered shadow-sm rounded">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Opis zadania</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Data</th>
                        <th scope="col">Priorytet</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dziennik.map((v, k) => (
                        <tr key={k}>
                            <td>{v[0]}</td>
                            <td>{v[1]}</td>
                            <td>{v[2]}</td>
                            <td>{v[3] ? "Tak" : "Nie"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default KartaPrac;
