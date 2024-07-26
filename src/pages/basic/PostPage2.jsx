import React, { useEffect, useState } from 'react';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../constants/productOptions';
import axios from 'axios';

function PostPage2(props) {
    const [ product, setProduct ] = useState({
        productName: "",
        price: "",
        sizeId: "",
        colorId: ""
    });
    
    const [ sizeOptions, setSizeOptions ] = useState([]);
    const [ colorOptions, setColorOptions ] = useState([]);

    useEffect(() => {
        const getSize = async () => {
            const response = await axios.get("http://localhost:8080/api/v1/sizes");
            setSizeOptions(response.data);
            setProduct(product => ({
                ...product,
                sizeId: response.data[0].sizeId
            }));
            console.log(response.data)
        }
        const getColor = async () => {
            const response = await axios.get("http://localhost:8080/api/v1/colors");
            setColorOptions(response.data);
            setProduct(product => ({
                ...product,
                colorId: response.data[0].colorId
            }));
            console.log(response.data)
            
        }
        getSize();
        getColor();
        
    }, []);
   
    const handleInputChange = (e) => {
        setProduct(product => {
            return {
                ...product,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/product", product); //promise 가 올 때 까지 기다림(await : 프로미스에만 사용가능) => then과 같음
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
       
    }
    // const handleSubmitClick2 = () => {
       
    //     axios.post("http://localhost:8080/basic/product", product) 
    //     .then(response => {
    //         console.log(response);
    //     }).catch(errer => { 
    //         console.error(errer);
    //     })
       
    // }

    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST2)</h1>
            </header>
            <main>
                <h3>상품등록</h3>
                <p>
                    <label htmlFor=''>상품명: </label>
                    <input type='text' 
                        name='productName'
                        onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor=''>가격: </label>
                    <input type='text' 
                        name='price'
                        onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor=''>사이즈</label>
                    <select name='sizeId'onChange={handleInputChange} value={product.sizeId} >
                        {
                            sizeOptions.map(size => 
                                <option key={size.sizeId} value={size.sizeId}>{size.sizeName}</option>)
                        }
                        
                    </select>
                </p>
                <p>
                    <label htmlFor=''>색상</label>
                    <select  name='colorId'onChange={handleInputChange} value={product.colorId} >
                        {
                            colorOptions.map(color => 
                                <option key={color.colorId} value={color.colorId}>{color.colorName}</option>)
                        }
                    </select>
                </p>
                <p>
                    <button onClick={handleSubmitClick}>등록하기</button>
                </p>
            </main>
            
        </>
    );
}

export default PostPage2;