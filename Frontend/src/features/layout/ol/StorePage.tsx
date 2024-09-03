import React from "react";
import StoreMap from "./StoreMap";
import { useTranslation } from "react-i18next";

const StorePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("map.waitingToSeeYou")}</h3>
      <StoreMap />
    </div>
  );
};

export default StorePage;
