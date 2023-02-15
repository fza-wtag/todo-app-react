import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aemdlybecnilhqobaiwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbWRseWJlY25pbGhxb2JhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNjE0NDQsImV4cCI6MTk5MTgzNzQ0NH0.MawqvRVONrJWmOTjAmkSoBKLMPAl0dyiw2k2nUEt3IE"
);

export async function getCurrentTodos() {
  const tableData = await supabase.from("todo_data2").select();
  return tableData.data;
}

export async function addTodoSupabase(data, date) {
  return await supabase
    .from("todo_data2")
    .insert({ data: data, date: date })
    .select()
    .single();
}

export async function deleteTodoSupabase(id) {
  return await supabase
    .from("todo_data2")
    .delete()
    .eq("id", id)
    .select()
    .single();
}

export async function updateStateTodoSupabase(id, isCompleted, completedDate) {
  return await supabase
    .from("todo_data2")
    .update({ isCompleted: isCompleted, completedDate: completedDate })
    .eq("id", id)
    .select()
    .single();
}

export async function updateTodoSupabase(id, data, onEdit) {
  return await supabase
    .from("todo_data2")
    .update({ data, onEdit })
    .eq("id", id)
    .select()
    .single();
}

export async function updateStateTodoSupabaseOnEdit(
  id,
  isCompleted,
  completedDate,
  onEdit
) {
  return await supabase
    .from("todo_data2")
    .update({
      isCompleted: isCompleted,
      completedDate: completedDate,
      onEdit: onEdit,
    })
    .eq("id", id)
    .select()
    .single();
}
