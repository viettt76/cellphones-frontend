'use client';

import Categories from '@/components/shared/categories';
import ProductCollection from '@/components/shared/product-collection';
import SlidingBannerHome from '@/components/shared/sliding-banner-home';

export default function Home() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-stretch">
                <Categories />
                <SlidingBannerHome />
            </div>
            <div className="mt-3">
                <ProductCollection />
            </div>
        </div>
    );
}
