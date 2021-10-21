import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translation.json";

import {
	format as formatDate,
	isDate
} from "date-fns";
import { es, enUS } from "date-fns/locale";

const locales = {es,enUS };

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "es",

		interpolation: {
			// react already saves from xss
			escapeValue: false,

			format: (value, format, lng) => {
				
					const locale = locales[lng];
                    console.log(Date.parse(value))
					if (format === "short")
						return formatDate(value, "PP", { locale });
					return formatDate(value, format, { locale });
			}
		}
	});

export default i18n;