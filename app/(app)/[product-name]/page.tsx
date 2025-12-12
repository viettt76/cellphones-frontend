'use client';

import ProductOptionGroupRenderer from '@/components/shared/product-option-group';
import { formatCurrency } from '@/lib/utils/currentcy';
import { ProductDetailType } from '@/types/product';
import { CirclePlus, Cpu, Heart, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
    const params = useParams();

    console.log(params['product-name']);

    const productDetail: ProductDetailType = {
        id: 'ip15',
        name: 'iPhone 15 128GB',
        brand: 'Apple',
        category: 'smartphone',
        price: 21900000,
        promotion: 4,
        mainImage: 'https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg',
        images: [],
        optionGroups: [
            {
                label: 'Màu sắc',
                type: 'color',
                options: [
                    { label: 'Đen', value: 'black' },
                    { label: 'Xanh', value: 'blue' },
                ],
            },
            {
                label: 'Dung lượng',
                type: 'capacity',
                options: [
                    { label: '128GB', value: '128' },
                    { label: '256GB', value: '256', extraPrice: 3000000 },
                ],
            },
        ],
        specs: [
            {
                label: 'Kích thước màn hình',
                value: '6.5 inches',
            },
            {
                label: 'Công nghệ màn hình',
                value: 'Super Retina XDR',
            },
            {
                label: 'Camera sau',
                value: '48MP Fusion Main f/1.6',
            },
            {
                label: 'Camera trước',
                value: '18MP Center Stage f/1.6',
            },
            {
                label: 'Chipset',
                value: 'Chip A19 Pro',
            },
            {
                label: 'Công nghệ NFC',
                value: 'Có',
            },
            {
                label: 'Bộ nhớ trong',
                value: '256 GB',
            },
            {
                label: 'Pin',
                value: 'Xem video: 27 giờ Xem video trực tuyến: 22 giờ',
            },

            {
                label: 'Thẻ SIM',
                value: 'Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim',
            },
            {
                label: 'Hệ điều hành',
                value: 'iOS 26',
            },
            {
                label: 'Độ phân giải màn hình',
                value: '2736 x 1260 pixels',
            },
            {
                label: 'Tính năng màn hình',
                value: `Dynamic Island
                    Màn hình luôn bật
                    HDR
                    460 ppi
                    True Tone
                    Dải màu rộng (P3)
                    Haptic Touch
                    Tỷ lệ tương phản 2.000.000:1
                    Độ sáng 1000 nit (typ)
                    Đỉnh 1600 nit (HDR)
                    Đỉnh 3000 nit (ngoài trời)
                    Lớp phủ chống vân tay, chống phản chi`,
            },
            {
                label: 'Loại CPU',
                value: '6 lõi (2 hiệu năng + 4 tiết kiệm điện)',
            },
        ],
    };

    return (
        <div className="max-w-screen-xl mx-auto flex gap-x-6 mt-4">
            <div className="flex-1">
                <h2 className="text-xl font-bold">{productDetail.name}</h2>
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
                        src={productDetail.mainImage}
                        alt={productDetail.name}
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
                            {productDetail.specs.map((spec) => (
                                <tr key={`spec-${spec.label}`}>
                                    <td className="px-4 py-2 border border-[rgba(0,0,0,0.2)] bg-ring/20 w-1/3">
                                        {spec.label}
                                    </td>
                                    <td className="px-4 py-2 border border-[rgba(0,0,0,0.2)]">{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex-1">
                <div className="border border-blue-400 bg-blue-100 w-fit px-4 py-2 rounded-xl relative">
                    <span>Giá sản phẩm</span>
                    <div className="flex items-center gap-x-4">
                        <span className="text-xl">{formatCurrency(productDetail.price)}</span>
                        {productDetail.promotion && (
                            <span className="line-through">
                                {formatCurrency((productDetail.price * (100 - productDetail.promotion)) / 100)}
                            </span>
                        )}
                    </div>
                    {productDetail.promotion && (
                        <div className="absolute -top-3 right-2 bg-primary text-white px-3 py-1 rounded-xl">
                            {productDetail.promotion}%
                        </div>
                    )}
                </div>
                {/* <div className="mt-3">
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
                </div> */}
                {productDetail.optionGroups?.map((option) => (
                    <ProductOptionGroupRenderer option={option} key={`product-option-${option.label}`} />
                ))}
            </div>
        </div>
    );
}
