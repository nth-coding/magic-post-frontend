import http from '@/services/http'
import { AdminApi, AuthAPI } from '@/constants/API'

export const CustomerService = {
    listForAdmin: async (params: any) => {
        const bodyData = (
            await http.get(AdminApi.USER_MANAGE, {
                params,
            })
        ).data
        return {
            meta: bodyData.meta,
            data: bodyData.data,
        }
    },
    add: async (payload: any) => {
        return await http.post(AdminApi.USER_MANAGE, payload)
    },
    edit: async (id: any, payload: any) => {
        return await http.put(AdminApi.USER_MANAGE + '/' + id, payload)
    },
    delete: async (id: any) => {
        return await http.delete(AdminApi.USER_MANAGE + '/' + id)
    },
    getOne: async (id: any) => {
        return await http.get(AdminApi.USER_MANAGE + '/' + id)
    },
}