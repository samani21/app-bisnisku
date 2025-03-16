import React from 'react'
import { IconNavbar, NavbarContainer } from '../../../../Components/Theme/theme1/Navbar'

const Navbar = (props) => {
  const { dataThme, menuActive, setMenuActive, setModalProduct } = props;
  const handle = (no) => {
    setMenuActive(no)
    setModalProduct(false)
  }
  return (
    <NavbarContainer color={dataThme?.color}>
      <IconNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" color={dataThme?.icon_color} colorActive={dataThme?.color_menu_active} iconActive={dataThme?.icon_color_active} className={menuActive === 1 ? "active" : ""} onClick={() => handle(1)}>
        <path fill="currentColor" fillRule="evenodd" d="M9.744 2.072L7.818.917L5.892 2.072l-2.237.198l-.88 2.066l-1.693 1.475L1.585 8l-.503 2.189l1.693 1.475l.88 2.066l2.237.198l1.926 1.155l1.926-1.155l2.237-.198l.88-2.066l1.694-1.475L14.05 8l.504-2.189l-1.694-1.475l-.88-2.066zM5.5 6.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M6 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.146 5.854l5-5l-.708-.708l-5 5zM9.5 10a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clipRule="evenodd"></path>
      </IconNavbar>
      <IconNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={dataThme?.icon_color} colorActive={dataThme?.color_menu_active} iconActive={dataThme?.icon_color_active} className={menuActive === 2 ? "active" : ""} onClick={() => handle(2)}>
        <path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13" />
      </IconNavbar>
      <IconNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color={dataThme?.icon_color} colorActive={dataThme?.color_menu_active} iconActive={dataThme?.icon_color_active} className={menuActive === 3 ? "active" : ""} onClick={() => handle(3)}>
        <path fill="currentColor" fillRule="evenodd" d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zm-64.001 206.918L192 391.536l42.667 24.635V265.899zM106.667 192v150.267l42.666 24.635V216.633zm233.324-59.894l-125.578 72.836L256 228.952l125.867-72.669zM256 83.614l-125.867 72.67l41.662 24.052l125.579-72.835z"></path>
      </IconNavbar>
      <IconNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={dataThme?.icon_color} colorActive={dataThme?.color_menu_active} iconActive={dataThme?.icon_color_active} className={menuActive === 4 ? "active" : ""} onClick={() => handle(4)}>
        <path fill="currentColor" d="M9.05 9H7.06V6h1.99V4.03H7.06v-1c0-1.11.89-1.99 1.99-1.99h5.98V8l2.47-1.5L20 8V1.04h1c1.05 0 2 .96 2 1.99V17c0 1.03-.95 2-2 2H9.05c-1.05 0-1.99-.95-1.99-2v-1h1.99v-2H7.06v-3h1.99zM1 18h2v-3H1v-2h2v-3H1V8h2V5h2v3H3v2h2v3H3v2h2v3H3v2h2v1h16v2H5a2 2 0 0 1-2-2v-1H1z"></path>
      </IconNavbar>
      <IconNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={dataThme?.icon_color} colorActive={dataThme?.color_menu_active} iconActive={dataThme?.icon_color_active} className={menuActive === 5 ? "active" : ""} onClick={() => handle(5)}>
        <path fill="currentColor" d="M6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3z"></path>
      </IconNavbar>
    </NavbarContainer>
  )
}

export default Navbar
