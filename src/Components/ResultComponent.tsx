import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResultComponent = () => {
    const navigate = useNavigate();
    const { noOfFacts } = useParams()

    console.log("noOfFacts", noOfFacts);

    const [result, setResult] = useState<{ fact: string, length: number, isLoading: boolean }>({ fact: "NA", length: 2, isLoading: false })

    useEffect(() => {
        const fetchData = async () => {
            setResult(prev => ({ ...prev, isLoading: true }))
            const response = await axios("https://catfact.ninja/fact")
            setResult(({ ...response?.data, isLoading: false }))
        }
        fetchData()
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }} >
                <button onClick={() => navigate("/")} style={{marginTop:"10px"}} >Go Back</button>
                <h1>Cat Facts Generator</h1>
            </div>
            <h2>Discover interesting facts about cats!"</h2>
            <p>Fact: {result?.isLoading ? "Loading..." : result?.fact}</p>
        </div>
    )
}

export default ResultComponent