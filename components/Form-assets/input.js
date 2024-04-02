const InputComponent = ({labelName, type, placeholder, value, name, onChangeInput}) => {
   
    return (
        <div className="my-5">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            className="bg-[#FDFEFD] rounded-[8px] px-2 outline-none border border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[48px] text-[#999999] font-normal text-[12px] placeholder-[#999999] "
            onChange={onChangeInput}
            />
        </div>
    )
}

export default InputComponent;