import { tv } from "tailwind-variants";

const variants = tv({
  base: "grid grid-span-1 place-items-center bg-yellow-600 text-white rounded-t-lg text-lg font-semibold user-select-none",
  variants: {
    bgColor: {
      'to-do': 'bg-yellow-600',
      'in-progress': 'bg-blue-600',
      'finished': 'bg-green-600',
    }
  }
})

export default variants
