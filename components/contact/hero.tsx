import { Input } from "../ui/input"
import { TextAnimate } from "../ui/text-animate"

function Hero() {
  return (
    <>
      <div className="font-sans pt-28 space-y-28">
        <div className="overflow-y-hidden">
          <TextAnimate animation="slideUp" by="line" className="text-6xl sm:text-9xl font-semibold tracking-tighter">Conectemos</TextAnimate>
        </div>


        <div className="max-w-xl">
          <Input className="rounded-full" placeholder="Email" />
        </div>

      </div>
    </>
  )
}

export { Hero }
