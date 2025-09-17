import axios from "axios";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/config";
import { Table } from "react-bootstrap";

// axios 리엑트에서 스프링에서 데이터를 요청해야 합니다.
function App() {
    const [elementOne, setElementOne] = useState({}); 

    useEffect(() => {  // BackEnd 서버에서 데이터 읽어 오기
        const url = `${API_BASE_URL}/element`; // 요청할 url 주소

        axios
            .get(url, {})
            .then((response) => { // 응답이 성공했을 때
                console.log('응답 받은 데이터');
                console.log(response.data);

                setElementOne(response.data);
            });
    }, []);

    return (
        <>
            <Table hover style={{margin: '5px'}}>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>{elementOne.id}</td>
                    </tr>
                    <tr>
                        <td>상품명</td>
                        <td>{elementOne.name}</td>
                    </tr>
                    <tr>
                        <td>단가</td>
                        <td>{Number(elementOne.price).toLocaleString()}원</td>
                    </tr>
                     <tr>
                        <td>카테고리</td>
                        <td>{elementOne.category}</td>
                    </tr>
                     <tr>
                        <td>재고</td>
                        <td>{Number(elementOne.stock).toLocaleString()}개</td>
                    </tr>
                     <tr>
                        <td>이미지</td>
                        <td>{elementOne.image}</td>
                    </tr>
                     <tr>
                        <td>상품설명</td>
                        <td>{elementOne.description}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );

}

export default App;