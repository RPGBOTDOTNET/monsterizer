type DropdownOption = {
  label: string;
  value: string;
};
export const mapStringArrayForDropdown = (item: string): DropdownOption => {
  if (!item) throw new Error("Can't map an empty string");
  return { label: item, value: item };
};
export default mapStringArrayForDropdown;
