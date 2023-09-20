import {
  createMiddlewareClient,
  createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
