import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";

type MultiSelectorProps = {
  placeholder: string;
  options: Array<{ _id: string; name: string }>;
  defaultValues?: Array<{ _id: string; name: string }>;
  onSelectionChange?: (selectedIds: string[]) => void;
  value?: string[];
};

const MultiSelector = ({
  placeholder,
  options,
  defaultValues,
  onSelectionChange,
  value,
}: MultiSelectorProps) => {
  const defaultValueIds = defaultValues?.map((item) => item._id) || [];
  const currentValue = value || defaultValueIds;

  const handleValueChange = (selectedValues: string[]) => {
    if (onSelectionChange) {
      onSelectionChange(selectedValues);
    }
  };

  return (
    <MultiSelect
      values={currentValue}
      onValuesChange={handleValueChange}
      defaultValues={defaultValueIds}
    >
      <MultiSelectTrigger className="w-full max-w-[400px]">
        <MultiSelectValue
          placeholder={placeholder}
          overflowBehavior="wrap-when-open"
        />
      </MultiSelectTrigger>
      <MultiSelectContent className="dark">
        <MultiSelectGroup>
          {options.map((option) => (
            <MultiSelectItem key={option._id} value={option._id}>
              {option.name}
            </MultiSelectItem>
          ))}
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
};

export default MultiSelector;
