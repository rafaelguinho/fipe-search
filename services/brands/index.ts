import { BrandsApi } from "../../models/types";
import IBrandsService from "./IBrandsService";

export default class BrandsService implements IBrandsService {
  async getBrands(vehicleType: string): Promise<BrandsApi[]> {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehicleType}/marcas`
    );

    const data: BrandsApi[] = await response.json();

    return data;
  }
}
