const TextAreaComponent = ({labelName, placeholder, onChangeInput, name, value}) => {
    return (
        <div className=" my-5">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <textarea
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChangeInput}
            className="rounded-[8px] px-2 outline-none border border-subtext w-[100%] h-[120px] text-[#999999] font-normal text-[12px] placeholder-[#999999] ">

            </textarea>
        </div>
    )
}

export default TextAreaComponent;