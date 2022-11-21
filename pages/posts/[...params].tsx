import { useRouter } from "next/router";
import * as React from "react";

export interface IParamsProps {}

export default function Params(props: IParamsProps) {
  const router = useRouter();
  return (
    <div>
      Params
      <p>Params {JSON.stringify(router.query)}</p>
    </div>
  );
}
