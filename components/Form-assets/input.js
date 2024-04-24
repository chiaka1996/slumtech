const InputComponent = ({labelName, type, placeholder, value, name, onChangeInput}) => {
   
    return (
        <div className="">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            className="bg-[#FDFEFD] mt-[1%] rounded-[0.5rem] pl-[1.2em] outline-none border border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[3rem] text-[#2B2B2B] font-normal text-normal placeholder-[#999999]"
            onChange={onChangeInput}
            />
            {/* placeholder-[#999999] */}
        </div>
    )
}

export default InputComponent;