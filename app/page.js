import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="POS" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Inventario" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Reportes" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Empleados" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <p>Si quieren ver el login es "http://localhost:3000/login" no lo subí al main porque mi vs estaba raro </p>
      </div>
    </>
  )
}

export default App