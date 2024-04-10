const InputComponent = ({labelName, type, placeholder, value, name, onChangeInput}) => {
   
    return (
        <div className="my-5">
            <label className="font-label text-normal text-header">{labelName}</label><br/>
            <input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            className="bg-[#FDFEFD] rounded-[0.5rem] px-2 outline-none border border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[3rem] text-[#999999] font-normal text-twelve placeholder-[#999999] "
            onChange={onChangeInput}
            />
        </div>
    )
}

export default InputComponent;