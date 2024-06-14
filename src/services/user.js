import api from "configs/api"

const getProfile = () => api.get("user/whoami")

export { getProfile };