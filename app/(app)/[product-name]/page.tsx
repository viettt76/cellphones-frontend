'use client';

import { formatCurrency } from '@/lib/utils/currentcy';
import { CirclePlus, Cpu, Heart, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
    const params = useParams();

    console.log(params['product-name']);

    return (
        <div className="max-w-screen-xl mx-auto flex gap-x-6 mt-4">
            <div className="flex-1">
                <h2 className="text-xl font-bold">
                    Apple Watch Series 11 42mm (GPS) Viền Nhôm Dây Cao Su Size S/M | Chính hãng Apple Việt Nam
                </h2>
                <div className="flex gap-x-3">
                    <button className="flex gap-x-1 cursor-pointer text-blue-400 hover:text-blue-500">
                        <Heart /> <span>Yêu thích</span>
                    </button>
                    <button className="flex gap-x-1 cursor-pointer text-blue-400 hover:text-blue-500">
                        <MessageSquareText /> <span>Hỏi đáp</span>
                    </button>
                    <button className="flex gap-x-1 cursor-pointer text-blue-400 hover:text-blue-500">
                        <Cpu /> <span>Thông số</span>
                    </button>
                    <button className="flex gap-x-1 cursor-pointer text-blue-400 hover:text-blue-500">
                        <CirclePlus /> <span>So sánh</span>
                    </button>
                </div>
                <div className="w-full h-80 mt-3">
                    <Image
                        className="w-full h-full object-cover rounded-md"
                        src="https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg"
                        alt=""
                        width={800}
                        height={800}
                    />
                </div>
                <div className="mt-8">
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold">Thông số kỹ thuật</span>
                        <span className="text-blue-400">Xem tất cả</span>
                    </div>
                    <table className="mt-2 border-collapse rounded-xl border-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.2)] overflow-hidden w-full">
                        <tbody>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-2 border border-[rgba(0,0,0,0.2)] bg-ring/20 w-1/3">
                                        Kích thước màn hình
                                    </td>
                                    <td className="px-4 py-2 border border-[rgba(0,0,0,0.2)]">6.5 inches</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex-1">
                <div className="border border-blue-400 bg-blue-100 w-fit px-4 py-2 rounded-xl">
                    <span>Giá sản phẩm</span>
                    <div className="flex items-center gap-x-4">
                        <span className="text-xl">{formatCurrency(21900000)}</span>
                        <span className="text-lg line-through">{formatCurrency(21900000)}</span>
                    </div>
                </div>
                <div className="mt-3">
                    <span className="block font-semibold text-lg">Phiên bản</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <div className="border w-fit px-6 py-2 rounded-xl font-semibold">1TB</div>
                        <div className="border w-fit px-6 py-2 rounded-xl font-semibold">1TB</div>
                        <div className="border w-fit px-6 py-2 rounded-xl font-semibold">1TB</div>
                        <div className="border w-fit px-6 py-2 rounded-xl font-semibold">1TB</div>
                    </div>
                </div>
                <div className="mt-3">
                    <span className="block font-semibold text-lg">Màu sắc</span>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div className="border px-3 py-2 rounded-xl flex items-center gap-x-2" key={i}>
                                <Image
                                    className="w-10 h-10 object-cover rounded-md"
                                    src="https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg"
                                    alt=""
                                    width={800}
                                    height={800}
                                />
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="whitespace-nowrap text-sm font-medium">Hồng tím mộng</span>
                                    <span className="text-sm">{formatCurrency(23456789)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
