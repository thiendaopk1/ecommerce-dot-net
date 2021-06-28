import { useEffect, useState } from "react";
import romsApi from '../../../api/romsApi';
export default function useRomDetail(romId){
    const [rom, setRom] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await romsApi.get(romId);
                
                setRom(result);
            } catch (error) {
                console.error('Failed to fetch rom', error);
            }
            setLoading(false);
        })()
    },[romId])

    return {rom, loading};
}