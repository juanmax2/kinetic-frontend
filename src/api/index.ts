import { api } from "./axios";
import { setupInterceptors } from "./interceptors";

setupInterceptors(api);

export { api };
export default api;