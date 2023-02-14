import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aemdlybecnilhqobaiwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbWRseWJlY25pbGhxb2JhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNjE0NDQsImV4cCI6MTk5MTgzNzQ0NH0.MawqvRVONrJWmOTjAmkSoBKLMPAl0dyiw2k2nUEt3IE"
);

async function getCurrentTodos() {
  const tableData = await supabase.from("todo_data2").select();
  const tData = tableData.data;
  console.log(tData);
}

export async function addTodoSupabase(data, date) {
  return await supabase
    .from("todo_data2")
    .insert({ data: data, date: date })
    .select()
    .single();
}
