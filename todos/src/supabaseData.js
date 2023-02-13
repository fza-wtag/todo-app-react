import { React, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { addTodo } from "actions/index";
import { useDispatch } from "react-redux";

const supabase = createClient(
  "https://aemdlybecnilhqobaiwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbWRseWJlY25pbGhxb2JhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNjE0NDQsImV4cCI6MTk5MTgzNzQ0NH0.MawqvRVONrJWmOTjAmkSoBKLMPAl0dyiw2k2nUEt3IE"
);

const dispatch = useDispatch;

export async function getCurrentTodos() {
  const tableData = await supabase.from("todo_data").select();
  const todoList = tableData.data;
  console.log(todoList);
}


