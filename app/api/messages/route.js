import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

// ✅ GET messages
export async function GET() {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}

// ✅ POST message
export async function POST(req) {
  const body = await req.json();

  const { error } = await supabase
    .from("messages")
    .insert([{ content: body.text }]);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}

// ✅ DELETE message
export async function DELETE(req) {
  const body = await req.json();

  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("id", body.id);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}