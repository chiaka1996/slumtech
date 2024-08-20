const InputComponent = ({labelName, type, placeholder, value, name, onChangeInput}) => {
   
    return (
        <div className="mt-[1rem]">
            {/* <label className="font-label text-normal text-header">{labelName}</label><br/> */}
            <input 
            type={type} 
            placeholder={placeholder}
            name={name}
            value={value}
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-btn_bg 
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>
    )
}

export default InputComponent;