import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imgEplanation, setImgEplanation] = useState('');
    const [imageDate, setImageDate] = useState('');

    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=p2C2zWVaHEyUEkMuQfJHeKtr5QvpbyKaeVbdICGw`;

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const data = res.data;
            console.log(data);
            setImageUrl(data.url);
            setImageTitle(data.title);
            setImgEplanation(data.explanation);
            setImageDate(data.date);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert("City name not found, Please try again!")
        }
    }

    useEffect(() => {
        getProducts(apiURL);
    },[]);

    return (
        <>
            <div>
                <img src={imageUrl} alt="Nasa Astronomical" />
                <h1>{imageTitle}</h1>
                <h3>{imageDate}</h3>
                <p>{imgEplanation}</p>
            </div>
        </>
    );
}

export default Home;