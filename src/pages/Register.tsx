import { DivContainerLR, Form } from "../components/LRComponents"
import Design from "../layout/Design"

function RegisterPage(){
    return(
        <Design>
            <div className="min-h-screen bg-blue-400">
               <DivContainerLR>
                <Form></Form>
               </DivContainerLR>
            </div>
        </Design>
    )
}
export default RegisterPage