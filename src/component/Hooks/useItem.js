import React, { useEffect, useState } from 'react';

const useItem = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `https://intense-tor-77999.herokuapp.com/item`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return [item,setItem];
};

export default useItem;