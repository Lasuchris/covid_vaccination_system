import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { handlePopUpClose } from '../features/reducers/PopUp'
import  ModelContainer  from './ModelContainer'
import {registerJab} from '../features/reducers/jab'
import {useHistory} from "react-router-dom"


const PopUp = () => {
    const open = useSelector((state) => state.popUp.openPopUp)
    const jabName = useSelector((state) => state.jab.jabName)
    const NationalId = useSelector((state) => state.jab.NationalId)
    const VaccineId = useSelector((state) => state.jab.VaccineId)
    const HealthWorkerId = useSelector((state) => state.jab.HealthWorkerId)

    const history = useHistory()
    const jab = {
        jabName,
        HealthWorkerId,
        NationalId,
        VaccineId,
        
    }

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(registerJab(jab)) 
        history.push('/records')
        dispatch(handlePopUpClose())
    }
    return (
        <div>

            <Dialog open={open} onClose={() => { dispatch(handlePopUpClose()) }} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Jab</DialogTitle>
                <DialogContent>
                    <ModelContainer/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { dispatch(handlePopUpClose()) }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { handleClick() }} color="primary">
                        Give Jab
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PopUp
