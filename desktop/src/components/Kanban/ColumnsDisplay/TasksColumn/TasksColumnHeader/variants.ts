import { tv } from "tailwind-variants";

const variants = tv({
  base: "grid row-span-1 min-h-10 place-items-center bg-gray-600 text-white rounded-t-lg text-lg font-semibold user-select-none",
  variants: {
    bgColor: {
      'to-do': 'bg-yellow-600',
      'in-progress': 'bg-blue-600',
      'finished': 'bg-green-600',
    }
  }
})

export default variants
