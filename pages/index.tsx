import type { NextPage } from "next";
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

const Home: NextPage = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
  }).required();
  //const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  // function onSubmit(data) {
  //   // display form data on success
  //   alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  //   return false;
  // }

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('name')} />
      <input type="number" {...register('age')} />
      <input type="submit" />
    </form>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  const data = await response.json();

  console.log(data);

  return {
    props: {
      brands: data,
    },
    revalidate: 1,
  };
}

export default Home;
