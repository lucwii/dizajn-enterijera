import { supabaseClient } from "../lib/supabase/client";
import { GalleryImage } from "../types/gallery";

export const getGalleryImages = async (): Promise<GalleryImage[]> => {
    const {data, error} = await supabaseClient
        .from("gallery_images")
        .select("*")        
        .order('created_at', {ascending: false})

    if(error) {
        console.error(error);
        return [];
    }

    return data || [];
}