import InputSearch from "../elements/inputSearch";
import _defaultProfilePicture from "../../assets/images/profile-picture.jpg";

/**
 * SPA Header Bar
 * 
 * @returns JSX elements
 * @since 1.0.0
 */
const Header = () => {
    return(
        <div className="w-full h-14 sm:h-20 [&>div]:h-full flex [&>div]:flex [&>div]:items-center border-b border-[var(--main-layout-border-color)] text-[var(--header-text-color)]" style={{gridArea: "header"}}>
            <div className="w-14 sm:w-20 border-r border-[var(--main-layout-border-color)] justify-center">
                <div className="text-3xl">
                    <span className="font-semibold text-[var(--color-accent)]">G</span>
                    <span>S</span>
                </div>
            </div>
            <div className="flex-1 px-4 md:px-8">
                <InputSearch />
            </div>
            <div className="pr-4 xl:px-10">
                <img className="w-[45px] rounded-full overflow-hidden" src={_defaultProfilePicture} alt="Default Proifle Picture" />
            </div>
        </div>
    )
}

export default Header;