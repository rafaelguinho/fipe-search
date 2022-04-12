import { ModelsApi } from "../../models/types";

export default interface IModelsService {
  getModels(vehicleType: string, brandId: number): Promise<ModelsApi[]>;
}
