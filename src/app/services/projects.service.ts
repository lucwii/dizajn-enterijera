import { supabaseClient } from "../lib/supabase/client";
import { Project } from "../types/projects";

export const getProjects = async (): Promise<Project[]> => {
    const {data, error} = await supabaseClient
        .from("projects")
        .select("*")
        .eq("published", true)
        .order("created_at", {ascending: false})

    if(error) {
        console.error("Error fetching projects: ", error);
        return [];
    }

    return data || [];
}