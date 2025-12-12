import { ProductOptionGroupType } from '@/types/product';

export default function CapacityOption({ option }: { option: ProductOptionGroupType }) {
    return (
        <div className="flex gap-2">
            {option.options.map((o) => (
                <button key={o.value} className="rounded-full w-8 h-8 border">
                    <img src={o.image} alt={o.label} />
                </button>
            ))}
        </div>
    );
}
