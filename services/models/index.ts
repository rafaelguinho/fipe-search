import { ModelsApi } from "../../models/types";
import IModelsService from "./IModelsService";

export default class ModelsService implements IModelsService {
  async getModels(vehicleType: string, brandId: number): Promise<ModelsApi[]> {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehicleType}/marcas/${brandId}/modelos`
    );

    const data: ModelsApi[] = await response.json();

    return data;
  }
}
