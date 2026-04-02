import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RouteOption } from "@orderly.network/ui-scaffold";

export function useNav() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onRouteChange = useCallback(
    (option: RouteOption) => {
      const searchParamsString = searchParams.toString();
      const queryString = searchParamsString ? `?${searchParamsString}` : "";

      if (option.target === "_blank") {
        window.open(option.href);
        return;
      }

      navigate(`/${queryString}`);
    },
    [navigate, searchParams]
  );

  return { onRouteChange };
}
