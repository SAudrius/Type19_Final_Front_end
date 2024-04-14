import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { CustomFormField } from "@/components/ui/CustomFormField";
import { CustomFormSelect } from "@/components/ui/CustomFormSelect";
import { login } from "@/lib/store/AuthReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import { postClassfiedAd, postClassifiedAd } from "@/utils/api";

interface CreateFormProps {
  categoriesData: Category[];
  townsData: Town[];
}

export const CreateForm = ({ townsData, categoriesData }: CreateFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [classifiedAds, setClassifiedAds] = useState<ClassifiedAd[]>();
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        phone: "",
        type: "",
        town: "",
        category: "",
        image_main: "",
        image_1: "",
        image_2: "",
        image_3: "",
        image_4: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        price: Yup.string().required("Price is required"),
        phone: Yup.string().required("Description is required"),
        type: Yup.string().required("Type is required"),
        town: Yup.string().required("Town is required"),
        category: Yup.string().required("Category is required"),
        image_main: Yup.string().required("Main image is require"),
        image_1: Yup.string().required("Main image 1 is require"),
        image_2: Yup.string().required("Main image 2 is require"),
        image_3: Yup.string().required("Main image 3 is require"),
        image_4: Yup.string().required("Main image 4 is require"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        const submitValues: postClassfiedAd = {
          title: values.title,
          description: values.description,
          price: parseInt(values.price),
          phone: parseInt(values.phone),
          type: values.type,
          town: values.town,
          category: values.category,
          image_main: values.image_main,
          image_1: values.image_1,
          image_2: values.image_2,
          image_3: values.image_3,
          image_4: values.image_4,
        };

        try {
          const classiefiedAdResponse = await postClassifiedAd(submitValues);
          setClassifiedAds(classiefiedAdResponse.data);
          dispatch(login());
          navigate("/user");
        } catch {
          console.log("err");
        }
        setSubmitting(false);
      }}
    >
      {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {() => (
        <Form className="mt-8 grid w-full max-w-[600px] gap-4">
          <p className="text-xl tracking-wider">General info</p>
          <CustomFormField name="title" type="text" placeholder="Your title" />
          <CustomFormField
            name="description"
            type="text"
            placeholder="Your password"
          />
          <CustomFormField name="price" type="text" placeholder="Your price" />
          <CustomFormField
            name="phone"
            type="number"
            placeholder="Your phone number"
          />
          <CustomFormField
            name="image_main"
            type="text"
            placeholder="Your main image"
          />
          <CustomFormField
            name="image_1"
            type="text"
            placeholder="Your image 1 image"
          />
          <CustomFormField
            name="image_2"
            type="text"
            placeholder="Your image 2 image"
          />
          <CustomFormField
            name="image_3"
            type="text"
            placeholder="Your image 3 image"
          />
          <CustomFormField
            name="image_4"
            type="text"
            placeholder="Your image 4 image"
          />
          <CustomFormSelect type="Town" label="Select category" name="town">
            <>
              <option value="" defaultChecked>
                Select town
              </option>
              {categoriesData &&
                categoriesData.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </>
          </CustomFormSelect>
          <CustomFormSelect type="category" label="Select Town" name="category">
            <>
              <option value="" defaultChecked>
                Select category
              </option>
              {townsData &&
                categoriesData.map((town) => (
                  <option key={town.id} value={town.id}>
                    {town.name}
                  </option>
                ))}
            </>
          </CustomFormSelect>
          <CustomFormSelect type="type" label="Select type" name="type">
            <>
              <option defaultChecked value="" disabled>
                Select type
              </option>
              <option defaultChecked value="sell">
                Sell
              </option>
              <option defaultChecked value="buy">
                Buy
              </option>
              <option defaultChecked value="rent">
                Rent
              </option>
            </>
          </CustomFormSelect>

          <button
            className="block h-[42px] w-full rounded-md bg-secondary text-white hover:bg-primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
