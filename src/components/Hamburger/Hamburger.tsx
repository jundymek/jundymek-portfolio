import { HamburgerBtn, HamburgerBars } from "./Hamburger.styles"

type HamburgerProps = {
  isOpen: boolean
  setIsOpen: (value: React.SetStateAction<boolean>) => void
  isFixed: boolean
}

export const Hamburger = ({ isOpen, setIsOpen, isFixed }: HamburgerProps) => {
  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <HamburgerBtn $isOpen={isOpen} type="button" onClick={handleClick} $isFixed={isFixed}>
      <HamburgerBars $isOpen={isOpen} $isFixed={isFixed}></HamburgerBars>
    </HamburgerBtn>
  )
}
