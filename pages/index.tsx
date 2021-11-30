import type { NextPage } from "next";
import VehicleSearch from "../components/VehicleSearch";
import { VehicleSearchProps } from "../components/VehicleSearch/types";

const Home: NextPage<VehicleSearchProps> = ({ brands }: VehicleSearchProps) => {
  return <VehicleSearch brands={brands} />;
};

export async function getStaticProps() {
  const response = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  const data = await response.json();

  return {
    props: {
      brands: data,
    },
    revalidate: 1,
  };
}

export default Home;
