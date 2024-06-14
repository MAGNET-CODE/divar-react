import { getCookie } from "utils/cookie";
import api from "configs/api";

const getNewTokens = async () => {
    const refreshToken = getCookie("refreshToken");

    if(!refreshToken) return;

    try {
        const response = await api.post("auth/check-refresh-token", {refreshToken});
        return {response};
    } catch (error) {
        return {error};
    }
};

export { getNewTokens };