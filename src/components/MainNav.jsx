import { NavLink } from "react-router-dom";

function MainNav() {
    const menu = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/aboutus",
            title: "About"
        },
        {
            path: "/posts",
            title: "Posts"
        }
    ];

    return (

        <nav>
            <ul>
                {menu.map((curItem) => (
                    <li>
                        <NavLink to={curItem.path}>{curItem.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MainNav;