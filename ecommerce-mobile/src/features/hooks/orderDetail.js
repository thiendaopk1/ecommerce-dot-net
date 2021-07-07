import { useEffect, useState } from "react";
import ordersApi from '../../api/ordersApi';

export default function useOrderDetail(statusId){
    const [order, setOrder] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await ordersApi.get(statusId);
                setOrder(res);
            } catch (error) {
                console.error('Failed to fetch order', error);
            }
        })()
    })

    return {order};
}