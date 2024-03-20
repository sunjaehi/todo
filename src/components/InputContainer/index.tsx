import { useState } from "react";
import React from 'react';
import { ToDoInput } from "components/ToDoInput";
import { ShowInputButton } from "components/ShowInputButton";

interface Props {
    readonly onAdd: (toDo:string)=>void;
}
export const InputContainer=({onAdd}:Props)=> {
    const [showToDoInput, setShowToDoInput]=useState(false);

    const onAddToDo=(toDo:string)=> {
        onAdd(toDo);
        setShowToDoInput(false);
    };
    return (
        <>
            {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
            <ShowInputButton
                show={showToDoInput}
                onClick={()=>setShowToDoInput(!showToDoInput)}
            />
        </>
    );
};