const TextAreaComponent = ({labelName, placeholder, onChangeInput, name, value}) => {
    return (
        <div className=" my-5">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <textarea
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChangeInput}
            className="mt-[1%] rounded-[0.5rem] px-[1.2em] outline-none border border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[7.5rem] text-[#2B2B2B] font-normal text-normal xlarge:text-normal placeholder-[#999999] ">

            </textarea>
        </div>
    )
}

export default TextAreaComponent;