import { NextRequest, NextResponse } from "next/server";
import { clientModel } from '@/models/client.model'


export const GET = async (req: NextRequest) => {
    try {
        const clients = await clientModel.getAllClients()
        return NextResponse.json({
            message: "clients fetched successgfully!",
            success: true,
            clients
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

