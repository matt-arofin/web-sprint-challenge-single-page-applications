// form value validation schema

import * as yup from 'yup';

const formSchema  = yup.object().shape({
    name: yup.string().trim().min(2, "name must be at least 2 characters").required("You must input your full name"),
    size: yup.string().oneOf(['small', 'medium', 'large', 'extra large'], "You must choose a size"),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    mushroom: yup.boolean(),
    peppers: yup.boolean(),
    special: yup.string().trim()
})

export default formSchema