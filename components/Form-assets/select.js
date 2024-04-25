const SelectComponent = ({labelName, options, name, value, onChangeInput}) => {
    return (
        <div className="">
            <label className="font-label text-normal xlarge:text-normal text-header">{labelName}</label><br/>
            <select onChange={onChangeInput} name={name} value={value} className="bg-[#FDFEFD] mt-[1%] rounded-[0.5rem] outline-none border 
            border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[3rem] pl-[1.2em] 
            text-[#2B2B2B] font-normal text-normal xlarge:text-normal ">
                <option value=""></option>
                {options.map((opt, i) => <option value={opt} key={i}>{opt}</option>)}
            </select>
        </div>
    )
}

export default SelectComponent;