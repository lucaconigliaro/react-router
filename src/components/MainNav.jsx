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
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menu.map((curItem) => (
                            <li className="mx-2" key={curItem.title}>
                                <NavLink to={curItem.path}>{curItem.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;