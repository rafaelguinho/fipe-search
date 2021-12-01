import { BrandsApi } from "../../models/types";

export default interface IBrandsService {
  getBrands(vehicleType: string): Promise<BrandsApi[]>
}
