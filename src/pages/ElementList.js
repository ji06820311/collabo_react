import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";

function App() {
    const [elementList, setElementList] = useState([]); 

    useEffect(() => {
        const url = `${API_BASE_URL}/element/list`;

        axios
            .get(url, {})
            .then((response) => {

                setElementList(response.data);
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
                        <td>카테고리</td>
                        <td>개수</td>
                        <td>이미지</td>
                        <td>상품설명</td>
                    </tr>
                </thead>
                <tbody>
                    {elementList.map((element) =>
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{Number(element.price).toLocaleString()}원</td>
                            <td>{element.category}</td>
                            <td>{Number(element.stock).toLocaleString()}개</td>
                            <td>{element.image}</td>
                            <td>{element.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );

}

export default App;