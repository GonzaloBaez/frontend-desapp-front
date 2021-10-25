import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translation.json";

import {
	format as formatDate
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
                    const dateFormat = value.split("/")
					const date = new Date(dateFormat[2],dateFormat[1]-1,dateFormat[0])

					if (format === "short")
						return formatDate(date, "P", { locale });
					return formatDate(date, format, { locale });
			}
		}
	});

export default i18n;