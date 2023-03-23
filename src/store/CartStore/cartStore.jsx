import create from "zustand";

const saveProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
};

const loadProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
};

export const useCartStore = create((set, get) => ({
    products: loadProductsFromLocalStorage(),

    addProduct: (product) => {
        const updatedProducts = [...get().products, { ...product, count: 1 }];
        saveProductsToLocalStorage(updatedProducts);
        set({ products: updatedProducts });
    },

    updateProduct: (updatedProduct) => {
        const products = get().products;
        const productIndex = products.findIndex((product) => product.id === updatedProduct.id);
        const updatedProducts = [...products];
        updatedProducts[productIndex] = updatedProduct;
        saveProductsToLocalStorage(updatedProducts);
        set({ products: updatedProducts });
    },

    deleteProduct: (productId) => {
        const updatedProducts = get().products.filter((product) => product.id !== productId);
        saveProductsToLocalStorage(updatedProducts);
        set({ products: updatedProducts });
    },

    clearProducts: () => {
        localStorage.removeItem("products");
        set({ products: [] });
    },

    getProducts: () => get().products,
}));
