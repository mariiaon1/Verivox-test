export interface Tarif {
    name: string;
    id: number;
    benefits: string[];
    price: number;
    downloadSpeed: number;
    uploadSpeed: number;
    details?: string;
}