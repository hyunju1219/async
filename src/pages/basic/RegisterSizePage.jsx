import axios from 'axios';
import React, { useState } from 'react';

function RegisterSizePage(props) {

    const [ size, setSize ] = useState({
        sizeName: ""
    });

    const handleInputChange = (e) => {
        setSize(size => {
            return {
                ...size,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmitClick = async () => {

        try {
            const response = await axios.post("http://localhost:8080/api/v1/size", size);

        } catch (error) {
            console.error(error);
        }
        
        setSize(size => {
            return {
                sizeName: ""
            }
        });
    }

    return (
        <div>
            <h1>사이즈 등록 페이지</h1>
            <p>
                <label htmlFor=''>사이즈 이름: </label>
                <input type='text' 
                    name='sizeName' 
                    onChange={handleInputChange}
                    value={size.sizeName} 
                    />
            </p>
            <p>
                <button onClick={handleSubmitClick}>등록</button>
            </p>
        </div>
    );
}

export default RegisterSizePage;