import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between fixed w-screen top-0 left-0 font-sans px-6 py-6 sm:py-20 sm:px-20 z-50">
      <Link href="/" className="tracking-tight text-sm after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-foreground pb-px cursor-pointer relative">Inicio</Link>
      <Link href="/contact" className="tracking-tight text-sm after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-foreground pb-px cursor-pointer relative">Contacto</Link>
    </header>
  )
}

export { Header }
