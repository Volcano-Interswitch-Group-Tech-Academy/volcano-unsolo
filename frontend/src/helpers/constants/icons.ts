import React from "react";
import {
  HomeIcon,
  PoolsIcon,
  WalletIcon,
  HistoryIcon,
  DestinationIcon,
  ExploreIcon,
} from "../../../public/svgs/icons";

export const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "dashboard":
      return HomeIcon;
    case "pools":
      return PoolsIcon;

    case "wallet":
      return WalletIcon;

    case "trip history":
      return HistoryIcon;

    case "destinations":
      return DestinationIcon;

    case "explore / blog":
      return ExploreIcon;
    default:
      return null;
  }
};
