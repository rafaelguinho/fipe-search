import { useEffect } from "react";
import { SelectOption } from "../../models/types";
import { VehicleSearchProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Router from 'next/router'

const VehicleSearch: React.FC<VehicleSearchProps> = ({
  vehicleType,
  brands = [],
}: VehicleSearchProps) => {
  console.log(vehicleType);
  const schema = yup
    .object()
    .shape({
      vehicleType: yup.string().required(),
      brand: yup.string().required(),
    })
    .required();

  const { register, watch, control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      vehicleType: vehicleType,
      brand: null
    },
  });

  const selectedVehicleType = watch("vehicleType");
  const selectedBrand = watch("brand");

  const { errors } = formState;

  const brandsOptions: SelectOption[] | undefined = brands?.map<SelectOption>(
    (b) => ({
      label: b.nome,
      value: b.codigo,
    })
  );

  return (
    <form onSubmit={handleSubmit((d) => console.log("handleSubmit", d))}>
      <p>I would like to:</p>
      <label htmlFor="field-car">
        <input
          {...register("vehicleType")}
          type="radio"
          name="vehicleType"
          value="carros"
          id="field-car"
          onChange={() => {
            Router.push('/carros')
          }}
        />
        Carro
      </label>
      <label htmlFor="field-moto">
        <input
          {...register("vehicleType")}
          type="radio"
          name="vehicleType"
          value="motos"
          id="field-moto"
          onChange={() => {
            Router.push('/motos')
          }}
        />
        Moto
      </label>
      <label htmlFor="field-truck">
        <input
          {...register("vehicleType")}
          type="radio"
          name="vehicleType"
          value="caminhoes"
          id="field-truck"
          onChange={() => {
            Router.push('/caminhoes')
          }}
        />
        Caminhões
      </label>
      <Controller
        name="brand"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
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
