import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/tariqsohail1110')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return (
        <>
            <div className='mx-40 text-center m-4 bg-gray-600 text-white p-4 text-3xl mt-6'>GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="img" width={300} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tariqsohail1110');
    return response.json();
}
