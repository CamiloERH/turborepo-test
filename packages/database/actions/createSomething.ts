'use server';


import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export async function createAction() {
    const newData = await client.dummyData.create({
        data: {
            name: process.env.HOSTEST
        }
    })
}
