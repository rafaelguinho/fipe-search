import { SelectOption } from "../../models/types";
import { VehicleSearchProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const VehicleSearch: React.FC<VehicleSearchProps> = ({
  vehicleType,
  brands = [],
}: VehicleSearchProps) => {
  console.log(vehicleType);
  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      age: yup.number().required(),
    })
    .required();

  const { register, control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const brandsOptions: SelectOption[] | undefined = brands?.map<SelectOption>(
    (b) => ({
      label: b.nome,
      value: b.codigo,
    })
  );

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Controller
        name="brand"
        control={control}
        render={({ field: { onChange, ref } }) => (
          <Select
            ref={ref}
            onChange={(e) => console.log(e)}
            options={brandsOptions}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default VehicleSearch;
