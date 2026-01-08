import { getServices } from "@/app/services/services.service";
import ServicesSection from "./ServicesSection";

export default async function Services() {
    const services = await getServices();

    return <ServicesSection services={services}/>
}