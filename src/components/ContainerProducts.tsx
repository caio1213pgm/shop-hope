import {PropsChildren} from "../layout/Design"

function ContainerProducts({children}: PropsChildren){
    return (
        <div className=" bg-blue-300 flex flex-wrap justify-center p-5 gap-y-3 gap-x-10 w-full">
            {children}
        </div>
    )
}

export default ContainerProducts;