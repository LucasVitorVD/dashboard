import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const card = tv({
  base: "rounded-xl bg-darkScale-dark40 px-10 py-6",
  variants: {
    size: {
      default: 'w-full h-[20.9rem]',
      xs: "w-full h-[9.375rem]"
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

interface CardProps extends ComponentProps<'div'>, VariantProps<typeof card> {
  children: ReactNode
}

const Card = ({ children, size, ...props }: CardProps) => {
  return (
    <div 
      className={card({ size })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card