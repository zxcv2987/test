import { responseType } from "@_types/response";
import { useQuery } from "@tanstack/react-query";
import { getStoreList } from "@apis/store";
import { AxiosError, AxiosResponse } from "axios";

export const useStoreList = (
    q: string,
    page: number,
    size = 5,
    city: string | null,
) => {
    return useQuery<
        Promise<AxiosResponse<responseType>>,
        AxiosError,
        responseType,
        [string, string, number]
    >(
        ["ywc.storeList", q, page],
        async () => {
            const request = await getStoreList(q, String(page), size, city);
            return request.data;
        },
        { enabled: false },
    );
};
