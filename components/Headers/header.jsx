const Header = ({index, headings}) => {
    return(
        <header className="flex flex-row font-header text-head max-large:text-[29px] text-header  relative mb-[3%]">
        <div className="text-right w-[3.75rem] max-large:w-[50px] h-[3.75rem] max-sm:h-[50px] bg-header_shadow rounded-full text-index z-70">{index}</div>
        <span>{headings}</span>
        </header>
    )
}

export default Header;