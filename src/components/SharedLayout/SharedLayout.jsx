import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <nav className={css.header__nav}>
                    <NavLink to="/" className={({ isActive }) => `${isActive && css.active} ${css.header__navLink}`}> Home </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => `${isActive && css.active} ${css.header__navLink}`}>Movies</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

