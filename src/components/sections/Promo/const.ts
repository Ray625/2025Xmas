import { useI18n } from "vue-i18n";

export function usePromoTabs() {
  const { t } = useI18n();

  return [
    { label: t("sections.promo.tabs.xinyi"), key: "xinyi" },
    { label: t("sections.promo.tabs.eastern"), key: "eastern" },
    { label: t("sections.promo.tabs.taipei"), key: "taipei" },
  ];
}
