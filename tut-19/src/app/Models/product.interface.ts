export interface ProductData {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
}

export interface ProductResponse {
    limit: number,
    products:ProductData[],
    skip: number,
    total: number,
}