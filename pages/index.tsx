import type { NextPage } from "next";
import VehicleSearch from "../components/VehicleSearch";
import { VehicleSearchProps } from "../components/VehicleSearch/types";
import { BrandsApi } from "../models/types";
import BrandsService from "../services/brands";
import { VEHICLE_TYPE_DEFAULT } from "../util/consts";

const Home: NextPage<VehicleSearchProps> = ({ brands }: VehicleSearchProps) => {
  return <VehicleSearch brands={brands} vehicleType={VEHICLE_TYPE_DEFAULT}/>;
};

export async function getStaticProps() {

  const brandsService = new BrandsService();

  const brands: BrandsApi[] = await brandsService.getBrands(VEHICLE_TYPE_DEFAULT);

  return {
    props: {
      brands,
    },
    revalidate: 1,
  };
}

export default Home;
