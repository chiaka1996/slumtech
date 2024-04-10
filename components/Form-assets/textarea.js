const TextAreaComponent = ({labelName, placeholder, onChangeInput, name, value}) => {
    return (
        <div className=" my-5">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <textarea
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChangeInput}
            className="rounded-[0.5rem] px-2 outline-none border border-subtext w-[100%] h-[7.5rem] text-[#999999] font-normal text-twelve placeholder-[#999999] ">

            </textarea>
        </div>
    )
}

export default TextAreaComponent;