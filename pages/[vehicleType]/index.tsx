import { GetStaticPropsContext } from "next";
import React from "react";
import VehicleSearch from "../../components/VehicleSearch";
import { BrandsApi } from "../../models/types";
import BrandsService from "../../services/brands";
import { VEHICLE_TYPE_DEFAULT } from "../../util/consts";

interface VehicleTypeProps {
  vehicleType: string;
  brands?: BrandsApi[];
}

const VehicleType: React.FC<VehicleTypeProps> = ({
  vehicleType,
  brands = [],
}: VehicleTypeProps) => {
  console.log(vehicleType);

  return <VehicleSearch vehicleType={vehicleType} brands={brands} />;
};

export function getStaticPaths() {
  return {
    fallback: true,
    paths: ["carros", "motos", "caminhoes"].map((type) => ({
      params: { vehicleType: type },
    })),
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const vehicleType = context?.params?.vehicleType as string;

  const brandsService = new BrandsService();

  const brands: BrandsApi[] = await brandsService.getBrands(vehicleType ?? VEHICLE_TYPE_DEFAULT);

  return {
    props: {
      vehicleType,
      brands,
    },
    revalidate: 1,
  };
}
export default VehicleType;
