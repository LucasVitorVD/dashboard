import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const card = tv({
  base: "rounded-xl bg-darkScale-dark40 px-10 py-6 w-full",
  variants: {
    size: {
      default: 'h-[20.9rem]',
      xs: "h-[9.375rem]"
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

interface CardProps extends ComponentProps<'div'>, VariantProps<typeof card> {
  children: ReactNode
}

const Card = ({ children, size, className, ...props }: CardProps) => {
  return (
    <div 
      className={card({ size, className })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card