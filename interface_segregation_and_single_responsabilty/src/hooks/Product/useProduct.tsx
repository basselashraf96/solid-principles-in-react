interface ProductData {
    product: {
        name: string;
        price: number;
        inventory: number;
        image: string;
    };
}


const useProduct = (): ProductData => {
    return {
        product:
        {
            name: "Laptop",
            price: 2000,
            inventory: 5,
            image: 'https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    };
}

export default useProduct