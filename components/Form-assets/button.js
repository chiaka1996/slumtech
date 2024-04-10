const ButtonComponent = ({text, submitBtn, loading}) => {
    return (
        <div className="mt-5">
            <button onClick={submitBtn} className="h-[3rem] w-full text-btn_color hover:text-text_color rounded-normal font-btn_weight text-normal bg-btn_green hover:bg-[#66B978]">
                {/* {text} */}
                {loading ? 'submiting...' : text}
            </button>
        </div>
    )
}

export default ButtonComponent;