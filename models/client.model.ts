import { supabaseClient } from '@/utils/superbase'

interface IClient {
    name: string;
    email: string;
    businessName: string;
}
export const clientModel = {
    async addClient({ name, email, businessName }: IClient)
        : Promise<IClient> {
        const { data, error } = await supabaseClient
            .from("clients")
            .insert([{ name, email, businessName }])
            .select();

        if (error) throw new Error(error.message)
        return data[0]

    },

    async getAllClients() {
        const { data, error } = await supabaseClient.from("clients").select("*")
        if (!error) {
            return data; // return all data,
        }
        else {
            throw new Error(error.message)
        }
    }
}

