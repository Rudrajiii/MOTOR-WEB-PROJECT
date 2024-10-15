import { NavbarForDropdownWithMultipleLanguages } from "./components/Header"
import { Navitems } from "./components/NavItems.jsx"
export const App = () => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col gap-4">
      <NavbarForDropdownWithMultipleLanguages/>
      <Navitems/>
    </div>
  )
}