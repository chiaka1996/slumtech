const Header = ({index, headings}) => {
    return(
        <header className="flex flex-row font-header text-head max-sm:text-[29px] text-header relative mb-[3%]">
        <div className="text-right w-[60px] max-sm:w-[50px] h-[60px] max-sm:h-[50px] bg-header_shadow rounded-full text-index z-70">{index}</div>
        <span>{headings}</span>
        </header>
    )
}

export default Header;