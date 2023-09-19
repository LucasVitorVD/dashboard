import { ElementType } from "react"

type MenuItemProps = {
  icon: ElementType
  text: string
  isDanger?: boolean
}

const MenuItem = ({ icon: Icon, text, isDanger }: MenuItemProps) => {
  return (
    <div
      className={`flex items-center gap-3 py-3 px-9 hover:cursor-pointer rounded-sm ${isDanger ? "bg-lightRed" : "bg-lightPurple"}`}>
      <Icon size={24} className={isDanger ? "text-colorSystem-support04" : "text-brandColor"} />
      <p className={`text-lg ${isDanger ? "text-colorSystem-support04" : "text-brandColor"}`}>{text}</p>
    </div>
  )
}

export default MenuItem