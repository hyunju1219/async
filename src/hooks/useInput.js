import React, { useState } from 'react';

function useInput(props) {
    const[ value, setValue ] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }
    return { value, setValue, onChange };
}

export default useInput;

