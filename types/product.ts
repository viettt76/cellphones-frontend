export type OptionType = 'color' | 'capacity' | 'size' | 'cpu' | 'gpu' | 'band' | 'variant' | 'default';

export type ProductOptionType = {
    label: string;
    value: string;
    extraPrice?: number;
    image?: string;
};

export type ProductOptionGroupType = {
    label: string;
    type: OptionType;
    options: ProductOptionType[];
};

export type ProductDetailType = {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    promotion?: number | null;
    mainImage: string;
    images: string[];
    optionGroups?: ProductOptionGroupType[];
    specs: {
        label: string;
        value: React.ReactNode | string;
    }[];
};
