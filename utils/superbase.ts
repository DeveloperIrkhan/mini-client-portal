import { createClient } from "@supabase/supabase-js"


const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
// console.log("supabaseKey", supabaseKey)
// console.log("supabaseUrl", supabaseUrl)
if (!supabaseKey) {
    throw new Error("supabaseKey is null")
}
if (!supabaseUrl) {
    throw new Error("supabaseUrl is null")
}

export const supabaseClient = createClient(
    supabaseUrl, supabaseKey
)





