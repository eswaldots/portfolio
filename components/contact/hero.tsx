import { TextAnimate } from "../ui/text-animate"

function Hero() {
  return (
    <>
      <div className="font-sans pt-28">
        <div className="overflow-y-hidden">
          <TextAnimate animation="slideUp" by="line" className="text-6xl sm:text-9xl font-semibold tracking-tighter">Contactame</TextAnimate>
        </div>
      </div>
    </>
  )
}

export { Hero }
