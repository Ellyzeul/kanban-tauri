import { Button } from "./button"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./tooltip"

const HoverableButton = ({ hover_title, children, ...props }: HoverableButtonProp) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button {...props}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="select-none">{hover_title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default HoverableButton

type HoverableButtonProp = {
  hover_title: string,
  children: React.ReactNode,
} & React.HTMLAttributes<HTMLButtonElement>
