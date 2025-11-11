import { NextRequest, NextResponse } from "next/server";
import { clientModel } from '@/models/client.model'
import { EmailViaResend } from "@/utils/resend";



export const POST = async (req: NextRequest) => {
    try {
        const { name, email, businessName } = await req.json();
        // console.log(name, email, businessName)
        if (!name || !email || !businessName) {
            return NextResponse.json({ message: "data is missing", sucess: false }, { status: 500 })
        }
        const client = await clientModel.addClient({ name, email, businessName })
        const { data, error } = await EmailViaResend.emails.send({
            from: "hello@resend.dev",
            to: "programmer.irfansha@hotmail.com",
            subject: "Welcome to the Accountancy services Company",
            html: `<p>Hellow Mr:${name}, <br/>
            welcome to our Accountancy services company</p>`,
        })
        console.log("email sending data", { "data": data, error: error })
        return NextResponse.json({
            message: "New client added successfully",
            success: true,
            client
        }, { status: 200 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            message: "something went wrong",
            error: error.message,
            sucess: false
        },
            {
                status: 500
            })
    }
}

