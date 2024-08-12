import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'


export default async function middleware(req){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req, res})

    return res;
}

export const config  = {
    matcher:['/soilStats']
}