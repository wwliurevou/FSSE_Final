import { Product } from "@/types";

export default {
    getAll() {
        return new Promise<Product[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: "Lenovo 313A X-123",
                        price: 5_229_000,
                        description: "sv",
                        stock: 1,
                        created_at: "1",
                        updated_at: "1",
                    },
                    {
                        id: 2,
                        name: "HP 123 Z000",
                        price: 4_100_000,
                        description: "sv",
                        stock: 1,
                        created_at: "1",
                        updated_at: "1",
                    },
                    {
                        id: 3,
                        name: "Asus Y099",
                        price: 5_999_000,
                        description: "sv",
                        stock: 1,
                        created_at: "1",
                        updated_at: "1",
                    },
                ]);
            }, 500);
        });
    }
}
