import { useState } from "react";
export default function ConditionalCompoment(){
     const [display,setDisplay] = useState(true);
    if(display){
     return (
     <div>
       <h3>This is a conditional component</h3>
     </div>
    );
    } else {
        return(
        <div>
       <h3>Nothing to see here</h3>
     </div>
    );
    }   
    

    
}