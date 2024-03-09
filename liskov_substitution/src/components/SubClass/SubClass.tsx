import React,{useState} from 'react'
import Modal from 'react-modal'

interface ModalHolderProps {
    contentToShow: JSX.Element;
    id:number;
}

export const ModalHolder = ({ contentToShow,id }: ModalHolderProps) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <>
            <button onClick={() => setVisibility(true)}> Show Modal {id}</button>

            <Modal isOpen={visibility}>
                <div>{contentToShow}</div>
            </Modal>
        </>
    )
}

export default ModalHolder