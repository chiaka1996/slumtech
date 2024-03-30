const ButtonComponent = ({text}) => {
    return (
        <div className="mt-5">
            <button className="h-[48px] w-full text-btn_color hover:text-text_color rounded-normal font-btn_weight text-normal bg-btn_green hover:bg-[#66B978]">
                {text}
            </button>
        </div>
    )
}

export default ButtonComponent;