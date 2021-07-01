import { useEffect, useState } from "react";
import ramsApi from '../../../api/ramsApi';
export default function useRamDetail(ramId){
    const [ram, setRam] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await ramsApi.get(ramId);
                
                setRam(result);
            } catch (error) {
                console.error('Failed to fetch ram', error);
            }
            setLoading(false);
        })()
    },[ramId])

    return {ram, loading};
}