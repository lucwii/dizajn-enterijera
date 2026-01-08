import { supabaseClient } from "../lib/supabase/client";
import { Service } from "../types/services";

export const Services = async (): Promise<Service[]> => {
    const {data, error} = await supabaseClient 
        .from("services")
        .select("*")
        .order("created_at", {ascending: false})

    if(error) {
        console.error(error)
        return [];
    }

    return data || [];
}