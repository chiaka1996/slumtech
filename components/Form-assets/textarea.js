const TextAreaComponent = ({labelName, placeholder, onChangeInput, name, value}) => {
    return (
        <div className="">
            {/* <label className="font-label text-normal text-header">{labelName}</label><br/> */}
            <textarea
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChangeInput}
            className="rounded-[0.5rem] px-[1.2em] py-[0.5em] outline-none 
            border border-btn_bg w-[100%] h-[7.5rem] text-primary font-normal 
            text-[18px] xlarge:text-normal placeholder-primary"
            >

            </textarea>
        </div>
    )
}

export default TextAreaComponent;