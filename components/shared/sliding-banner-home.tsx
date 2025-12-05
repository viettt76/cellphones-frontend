'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SlidingBannerHome() {
    const [bannerApi, setBannerApi] = useState<any>(null);
    const [tabApi, setTabApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            id: 0,
            label: 'IPHONE 17 PRO MAX',
            image: 'https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg',
        },
        {
            id: 1,
            label: 'GALAXY S25 ULTRA',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/di-dong/1-top-10-dien-thoai-co-camera-tot-nhat-chup-anh-dep-nhat-hien-nay.jpg',
        },
        {
            id: 2,
            label: 'XIAOMI POCO F8 PRO',
            image: 'https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
        },
        {
            id: 3,
            label: 'IPHONE 17 PRO MAX',
            image: 'https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg',
        },
        {
            id: 4,
            label: 'GALAXY S25 ULTRA',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/di-dong/1-top-10-dien-thoai-co-camera-tot-nhat-chup-anh-dep-nhat-hien-nay.jpg',
        },
        {
            id: 5,
            label: 'XIAOMI POCO F8 PRO',
            image: 'https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
        },
        {
            id: 6,
            label: 'IPHONE 17 PRO MAX',
            image: 'https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg',
        },
        {
            id: 7,
            label: 'GALAXY S25 ULTRA',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/di-dong/1-top-10-dien-thoai-co-camera-tot-nhat-chup-anh-dep-nhat-hien-nay.jpg',
        },
        {
            id: 8,
            label: 'XIAOMI POCO F8 PRO',
            image: 'https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
        },
    ];

    useEffect(() => {
        if (!bannerApi) return;

        const onSelect = () => {
            const snap = bannerApi.selectedScrollSnap();
            setCurrent(snap);
            tabApi?.scrollTo(snap);
        };

        bannerApi.on('select', onSelect);
        return () => bannerApi.off('select', onSelect);
    }, [bannerApi]);

    const goTo = (index: number) => {
        setCurrent(index);
        bannerApi?.scrollTo(index);
        tabApi?.scrollTo(index);
    };

    return (
        <div className="space-y-2 max-w-2xl">
            <Carousel
                className="w-full"
                setApi={setTabApi}
                opts={{
                    dragFree: true,
                }}
            >
                <CarouselContent className="-ml-1">
                    {slides.map((s, i) => (
                        <CarouselItem
                            className={`flex relative p-0 basis-1/3 ${current === i ? 'mx-5' : ''}`}
                            key={s.id}
                            onClick={() => goTo(i)}
                        >
                            {current === i && (
                                <div className="absolute right-[99%] bottom-0 top-0 -scale-x-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1362"
                                        className="h-11 w-9"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M 988.750 22.566 C 986.138 23.926, 984 25.262, 984 25.536 C 984 25.982, 993.900 21.306, 994.917 20.380 C 996.155 19.251, 992.901 20.405, 988.750 22.566 M 747.477 195.250 L 739.500 203.500 747.750 195.523 C 752.288 191.136, 756 187.424, 756 187.273 C 756 186.544, 754.885 187.588, 747.477 195.250 M 329.987 1194.750 L 315.500 1209.500 330.250 1195.013 C 343.952 1181.555, 345.453 1180, 344.737 1180 C 344.592 1180, 337.955 1186.638, 329.987 1194.750 M 292.971 1229.750 L 286.500 1236.500 293.250 1230.029 C 299.520 1224.018, 300.457 1223, 299.721 1223 C 299.568 1223, 296.530 1226.037, 292.971 1229.750 M 16.750 1357.743 C 20.738 1357.932, 27.262 1357.932, 31.250 1357.743 C 35.237 1357.553, 31.975 1357.397, 24 1357.397 C 16.025 1357.397, 12.762 1357.553, 16.750 1357.743"
                                            fill="transparent"
                                        ></path>
                                        <path
                                            d="M 0 678.441 L 0 1355.877 4.698 1356.582 C 11.713 1357.634, 49.378 1356.255, 58.142 1354.625 C 75.112 1351.470, 113.306 1338.882, 134.500 1329.459 C 183.168 1307.823, 221.770 1285.436, 260.997 1256.099 C 280.057 1241.844, 298.425 1225.449, 328.826 1195.554 C 362.127 1162.808, 385.286 1133.566, 407.670 1096 C 427.019 1063.527, 430.431 1056.966, 447.458 1019.500 C 460.942 989.828, 464.472 978.257, 483.609 901 C 498.035 842.766, 549.729 636.436, 554.012 620 C 572.473 549.145, 592.445 478.080, 606.847 432 C 622.391 382.262, 630.945 362.446, 654.762 321 C 689.890 259.869, 708.840 234.684, 755.500 187.112 C 804.088 137.573, 860.800 92.593, 909.500 64.967 C 927.984 54.482, 991.312 21.173, 1017.500 8.161 L 1023.500 5.180 1024.001 680.340 L 1024.502 1355.500 1024.751 678 L 1025 0.500 512.500 0.752 L 0 1.004 0 678.441 M 0.497 678.500 C 0.497 1051.400, 0.611 1204.100, 0.750 1017.832 C 0.889 831.565, 0.889 526.465, 0.750 339.832 C 0.611 153.200, 0.497 305.600, 0.497 678.500"
                                            fill="#f5f5f5"
                                        ></path>
                                    </svg>
                                </div>
                            )}
                            <div
                                className={`px-3 h-11 w-full items-center flex text-sm font-medium whitespace-nowrap ${
                                    current === i ? 'bg-muted text-primary font-semibold' : ''
                                }`}
                            >
                                {s.label}
                            </div>
                            {current === i && (
                                <div className="absolute left-[99%] bottom-0 top-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1362"
                                        className="h-11 w-9"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M 988.750 22.566 C 986.138 23.926, 984 25.262, 984 25.536 C 984 25.982, 993.900 21.306, 994.917 20.380 C 996.155 19.251, 992.901 20.405, 988.750 22.566 M 747.477 195.250 L 739.500 203.500 747.750 195.523 C 752.288 191.136, 756 187.424, 756 187.273 C 756 186.544, 754.885 187.588, 747.477 195.250 M 329.987 1194.750 L 315.500 1209.500 330.250 1195.013 C 343.952 1181.555, 345.453 1180, 344.737 1180 C 344.592 1180, 337.955 1186.638, 329.987 1194.750 M 292.971 1229.750 L 286.500 1236.500 293.250 1230.029 C 299.520 1224.018, 300.457 1223, 299.721 1223 C 299.568 1223, 296.530 1226.037, 292.971 1229.750 M 16.750 1357.743 C 20.738 1357.932, 27.262 1357.932, 31.250 1357.743 C 35.237 1357.553, 31.975 1357.397, 24 1357.397 C 16.025 1357.397, 12.762 1357.553, 16.750 1357.743"
                                            fill="transparent"
                                        ></path>
                                        <path
                                            d="M 0 678.441 L 0 1355.877 4.698 1356.582 C 11.713 1357.634, 49.378 1356.255, 58.142 1354.625 C 75.112 1351.470, 113.306 1338.882, 134.500 1329.459 C 183.168 1307.823, 221.770 1285.436, 260.997 1256.099 C 280.057 1241.844, 298.425 1225.449, 328.826 1195.554 C 362.127 1162.808, 385.286 1133.566, 407.670 1096 C 427.019 1063.527, 430.431 1056.966, 447.458 1019.500 C 460.942 989.828, 464.472 978.257, 483.609 901 C 498.035 842.766, 549.729 636.436, 554.012 620 C 572.473 549.145, 592.445 478.080, 606.847 432 C 622.391 382.262, 630.945 362.446, 654.762 321 C 689.890 259.869, 708.840 234.684, 755.500 187.112 C 804.088 137.573, 860.800 92.593, 909.500 64.967 C 927.984 54.482, 991.312 21.173, 1017.500 8.161 L 1023.500 5.180 1024.001 680.340 L 1024.502 1355.500 1024.751 678 L 1025 0.500 512.500 0.752 L 0 1.004 0 678.441 M 0.497 678.500 C 0.497 1051.400, 0.611 1204.100, 0.750 1017.832 C 0.889 831.565, 0.889 526.465, 0.750 339.832 C 0.611 153.200, 0.497 305.600, 0.497 678.500"
                                            fill="#f5f5f5"
                                        ></path>
                                    </svg>
                                </div>
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
            </Carousel>

            <Carousel setApi={setBannerApi} className="w-full max-w-full">
                <CarouselContent>
                    {slides.map((s) => (
                        <CarouselItem key={s.id}>
                            <div className="rounded-lg text-center text-lg font-medium h-full">
                                <Image
                                    className="object-cover h-full"
                                    src={s.image}
                                    alt={s.label}
                                    width={800}
                                    height={800}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
            </Carousel>
        </div>
    );
}
