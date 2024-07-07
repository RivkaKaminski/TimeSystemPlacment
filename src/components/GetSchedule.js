import axios from "axios"
import { useEffect, useState } from "react"

export default function GetSchedule() {

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await axios.get('https://localhost:7097/Population')
                console.log('data', response.data);

            } catch (error) {
                console.log(error);
            }
        }
        getAll()
    }, [])
    
   
}
