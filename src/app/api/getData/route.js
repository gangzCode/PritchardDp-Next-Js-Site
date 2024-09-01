import { NextResponse } from "next/server"
import { promises as fs } from 'fs';



export async function GET(req, res)  {
    var data = require('../../../../public/data.json')
    // const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    // const data = JSON.parse(file);

    // console.log(data)

    return NextResponse.json({success:true,message:data})
}