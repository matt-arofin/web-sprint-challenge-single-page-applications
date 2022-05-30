// form value validation schema

import * as yup from 'yup';

const formSchema  = yup.object().shape({
    name: yup.string().trim().required("You must input your full name"),
    size: yup.string().oneOf(['small','medium', 'large', 'extra large']),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    mushroom: yup.boolean(),
    peppers: yup.boolean(),
    instructions:yup.string().trim()
})

export default formSchema