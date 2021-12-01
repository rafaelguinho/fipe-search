import type { NextPage } from "next";
import VehicleSearch from "../components/VehicleSearch";
import { VehicleSearchProps } from "../components/VehicleSearch/types";
import { BrandsApi } from "../models/types";
import BrandsService from "../services/brands";

const Home: NextPage<VehicleSearchProps> = ({ brands }: VehicleSearchProps) => {
  return <VehicleSearch brands={brands} />;
};

export async function getStaticProps() {

  const brandsService = new BrandsService();

  const data: BrandsApi[] = await brandsService.getBrands('carros');

  return {
    props: {
      brands: data,
    },
    revalidate: 1,
  };
}

export default Home;
