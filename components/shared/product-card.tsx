import { formatCurrency } from '@/lib/utils/currentcy';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';

export default function ProductCard() {
    return (
        <div className="w-full rounded-md px-2 py-3 flex flex-col shadow-[0_0_20px_#eee] shadow-bottom-50">
            <div className="w-3/4 aspect-square mx-auto">
                <Image
                    className="w-full h-full object-cover rounded-md"
                    src="https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
            </div>
            <h3 className="font-semibold mt-6">iPhone Air 256GB | Chính hãng</h3>
            <div className="flex flex-wrap items-center space-x-4">
                <span className="text-primary font-semibold">{formatCurrency(300000)}</span>
                <span className="text-muted-foreground/50 line-through text-sm">{formatCurrency(300000)}</span>
            </div>
            <div className="flex justify-between items-center mt-5">
                <span className="flex items-center gap-x-1">
                    <Star className="text-yellow-400 fill-yellow-400" width={20} height={20} />
                    <span>5</span>
                </span>
                <span className="flex items-center gap-x-1">
                    <Heart className="text-blue-500" width={20} height={20} />
                    <span className="text-blue-500">Yêu thích</span>
                </span>
            </div>
        </div>
    );
}
