import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";

function App() {
    const [FruitList, setFruitList] = useState([]); // 넘어온 과일 목록

    useEffect(() => {
        const url = `${API_BASE_URL}/fruit/list`;

        axios
            .get(url, {})
            .then((response) => {

                setFruitList(response.data);
            });
    }, []);

    return (
        <>
            <Table hover style={{ margin: '5px' }}>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>상품명</td>
                        <td>단가</td>
                    </tr>
                </thead>
                <tbody>
                    {FruitList.map((fruit) =>
                        <tr key={fruit.id}>
                            <td>{fruit.id}</td>
                            <td>{fruit.name}</td>
                            <td>{Number(fruit.price).toLocaleString()}원</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );

}

export default App;