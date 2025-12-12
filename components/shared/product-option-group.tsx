import { OptionType, ProductOptionGroupType } from '@/types/product';
import ColorOption from './product-options/color-option';

export type OptionComponentProps = {
    option: ProductOptionGroupType;
};

// Map type → Component
export const optionComponentMap: Record<OptionType, React.FC<OptionComponentProps>> = {
    color: ColorOption,
    capacity: ColorOption,
    size: ColorOption,
    cpu: ColorOption,
    gpu: ColorOption,
    band: ColorOption,
    variant: ColorOption,
    default: ColorOption,
};

export default function ProductOptionGroupRenderer({ option }: { option: ProductOptionGroupType }) {
    const Component = optionComponentMap[option.type];

    return <Component option={option} />;
}
