import { useEffect, useState } from "react";
import productApi from '../../../api/productApi';

export default function useInfomationDetail(productId,infomationId){
    const [infomation, setInfomation] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.getInfo(productId,infomationId);
                
                setInfomation(result);
            } catch (error) {
                console.error('Failed to fetch product', error);
            }

        })()
    },[productId,infomationId])

    return {infomation};
}