import supabase from "supabase";
import { WENT_WRONG_MESSAGE } from "constants";
import { dangerMessage } from "toastMethods";

export async function getCurrentTodos() {
  const tableData = await supabase.from("todo_data2").select();
  return tableData.data;
}

export async function addTodoSupabase(data, date) {
  try {
    const response = await supabase
      .from("todo_data2")
      .insert({ data, date })
      .select()
      .single();
    return response;
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  }
}

export async function deleteTodoSupabase(id) {
  try {
    const response = await supabase
      .from("todo_data2")
      .delete()
      .eq("id", id)
      .select()
      .single();
    return response;
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  }
}

export async function updateStateTodoSupabase(id, isCompleted, completedDate) {
  try {
    const response = await supabase
      .from("todo_data2")
      .update({ isCompleted, completedDate })
      .eq("id", id)
      .select()
      .single();
    return response;
  } catch (error) {
    console.error(error);
    dangerMessage(WENT_WRONG_MESSAGE);
  }
}

export async function updateTodoSupabase(id, data, onEdit) {
  try {
    const response = await supabase
      .from("todo_data2")
      .update({ data, onEdit })
      .eq("id", id)
      .select()
      .single();
    return response;
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  }
}


export async function updateStateTodoSupabaseOnEdit(
  id,
  isCompleted,
  completedDate,
  onEdit
) {
  try {
    const response = await supabase
      .from("todo_data2")
      .update({
        isCompleted,
        completedDate,
        onEdit,
      })
      .eq("id", id)
      .select()
      .single();
    return response;
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  }
}

