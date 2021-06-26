import { useEffect, useState } from 'react';
import brandsApi from '../../../api/brandsApi';

export default function useBrandDetail(brandId){
    const [brand, setbrand] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await brandsApi.get(brandId);
                
                setbrand(result);
            } catch (error) {
                console.error('Failed to fetch brand', error);
            }
            setLoading(false);
        })()
    },[brandId])

    return {brand, loading};
}
