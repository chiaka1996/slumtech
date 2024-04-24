const SelectComponent = ({labelName, options, name, value, onChangeInput}) => {
    return (
        <div className="">
            <label className="font-label text-normal xlarge:text-normal text-header">{labelName}</label><br/>
            <select onChange={onChangeInput} name={name} value={value} className="bg-[#FDFEFD] mt-[1%] rounded-[0.5rem] outline-none border border-subtext border-x-0 border-t-0 border-b-1 w-[100%] h-[3rem] text-[#999999] font-normal text-twelve xlarge:text-normal ">
                <option value=""></option>
                {options.map((opt, i) => <option value={opt} key={i}>{opt}</option>)}
            </select>
        </div>
    )
}

export default SelectComponent;