import ThemeToggle from '@/app/ui/theme-toggle';
import Logo from '../app/ui/logo';
import NavLinks from '../app/ui/navlinks';
const SideNav = () => {
    return (
        <div>
            <div>
                <Logo/>
                <ThemeToggle/>
            </div>
            <div>
                <NavLinks />
            </div>
            <div></div>
        </div>
    );
};

export default SideNav;