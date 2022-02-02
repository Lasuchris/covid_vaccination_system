import React from 'react'
import { TextField, Paper, Button, makeStyles, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerClient } from '../../features/reducers/client'


const useStyles = makeStyles((theme) => {
    return ({
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: theme.spacing(4)
        },
        formPaper: {
            width: '40%',
            margin: 'auto',
            marginTop: '130px'
        },
        formBtn: {
            marginTop: theme.spacing(2)
        }
    })
})

const ClientForm = () => {
    const dispatch = useDispatch()

    const classes = useStyles()
    const validationSchema = yup.object({
        clientName: yup.string().required('clientName is required'),
        age: yup.string().required('Age your age'),
        sex: yup.string().required('sex is required').min(4).max(6),
        occupation: yup.string().required('occupation is required'),
        nationality: yup.string().required('nationalilty is required'),
        district: yup.string().required('District is required'),
        subCounty: yup.string().required('Enter your age'),
        parish: yup.string().required('parish is required'),
        village: yup.string().required('Enter your village'),
        telphoneNumber: yup.string().required('telNo is required').max(10)


    })

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            clientName: '',
            age: '',
            sex: '',
            occupation: '',
            nationality: '',
            district: '',
            subCounty: '',
            parish: '',
            village: '',
            telphoneNumber: ''
        },
        onSubmit: (values, onSubmitProps) => {
            console.log(values)
            dispatch(registerClient(values))
            onSubmitProps.resetForm()

        }
    })
    return (
        < Paper variant='outlined' className={classes.formPaper} >
            <form
                className={classes.form}
                noValidate
                autoComplete='off'
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    label='Name of Client'
                    type='text'
                    margin='normal'
                    name='clientName'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.clientName}
                    error={formik.touched.clientName && Boolean(formik.errors.clientName)}
                    helperText={formik.touched.clientName && formik.errors.clientName}
                    onBlur={formik.handleBlur}
                />
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            label='Age'
                            type='number'
                            margin='normal'
                            name='age'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            helperText={formik.touched.age && formik.errors.age}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Sex'
                            type='text'
                            margin='normal'
                            name='sex'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.sex}
                            error={formik.touched.sex && Boolean(formik.errors.sex)}
                            helperText={formik.touched.sex && formik.errors.sex}
                            onBlur={formik.handleBlur}
                        />

                    </Grid>
                </Grid>
                <TextField
                    label='Occupation' 
                    type='text'
                    margin='normal'
                    name='occupation'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.occupation}
                    error={formik.touched.occupation && Boolean(formik.errors.occupation)}
                    helperText={formik.touched.occupation && formik.errors.occupation}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    label='Nationality'
                    type='text'
                    margin='normal'
                    name='nationality'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                    error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                    helperText={formik.touched.nationality && formik.errors.nationality}
                    onBlur={formik.handleBlur}
                />
                <Grid container justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            label='District'
                            type='text'
                            margin='normal'
                            name='district'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.district}
                            error={formik.touched.district && Boolean(formik.errors.district)}
                            helperText={formik.touched.district && formik.errors.district}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='sub County'
                            type='text'
                            margin='normal'
                            name='subCounty'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.subCounty}
                            error={formik.touched.subCounty && Boolean(formik.errors.subCounty)}
                            helperText={formik.touched.subCounty && formik.errors.subCounty}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                </Grid>
                <Grid container direction='row' justifyContent='space-between'>
                    <Grid item >
                        <TextField
                            label='parish'
                            type='string'
                            margin='normal'
                            name='parish'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.parish}
                            error={formik.touched.parish && Boolean(formik.errors.parish)}
                            helperText={formik.touched.parish && formik.errors.parish}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            label='Village'
                            type='text'
                            margin='normal'
                            name='village'
                            required
                            onChange={formik.handleChange}
                            value={formik.values.village}
                            error={formik.touched.village && Boolean(formik.errors.village)}
                            helperText={formik.touched.village && formik.errors.village}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </Grid>
                <TextField
                    label='Telephone'
                    type='number'
                    margin='normal'
                    name='telphoneNumber'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.telphoneNumber}
                    error={formik.touched.telphoneNumber && Boolean(formik.errors.telphoneNumber)}
                    helperText={formik.touched.telphoneNumber && formik.errors.telphoneNumber}
                    onBlur={formik.handleBlur}
                />
                <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    className={classes.formBtn}
                >Register</Button>
            </form>
        </Paper>

    )
}

export default ClientForm
