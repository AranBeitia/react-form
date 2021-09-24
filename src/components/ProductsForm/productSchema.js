import * as yup from "yup"

const productSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string(),
  brand: yup.string(),
  price: yup.number().min(0).default(0),
  quantity: yup.number().min(0).default(0)
})

export default productSchema