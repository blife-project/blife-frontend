import { base } from "@/config/axios";

const authCigar = {
  register: async (payload: IRegisterPayload) => {
    const response = await base.post<IRespRegister>("/auth/register", payload);
    return response.data;
  },
  login: async (payload: ILoginPayload) => {
    const response = await base.post<IRespLogin>("/auth/login", payload);
    return response.data;
  },
};

export default authCigar;
