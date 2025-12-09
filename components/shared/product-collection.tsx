import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import ProductCard from './product-card';

export default function ProductCollection() {
    return (
        <section className="flex space-x-6">
            <div>
                <Image
                    className="w-40 h-96 object-cover rounded-md"
                    src="https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <Tabs defaultValue="phone">
                    <TabsList>
                        <TabsTrigger value="phone">Điện thoại</TabsTrigger>
                        <TabsTrigger value="tablet">Máy tính bảng</TabsTrigger>
                    </TabsList>
                    <TabsContent value="phone">
                        <div className="grid grid-cols-4 gap-4">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </TabsContent>
                    <TabsContent value="tablet">
                        <div className="grid grid-cols-4">
                            <ProductCard />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
