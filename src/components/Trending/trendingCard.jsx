import { Tag } from "../tag"

export const CardCreator = (props) => {
    return(
        <div className="relative">
            <div className="w-[100%] h-[45vh] bg-[#00000060] rounded-xl absolute z-20"></div>
            <img alt="asd" className="absolute z-1 object-cover object-center relative w-[100%] h-[45vh] rounded-xl" src={props.url}/>
            <div className="absolute z-30 bottom-7 px-6 gap-4 flex flex-col">
                <Tag/>
                <p className="text-white font-semibold text-lg">{props.titles}</p>
            </div>
        </div>
    )
}