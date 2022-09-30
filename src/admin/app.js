
import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';
import farsiLoc from './extensions/translations/fa.json';

const config = {
  auth: {
    logo: AuthLogo,
  },
 // Replace the favicon
  head: {
    favicon: favicon,
  },
    // Replace the Strapi logo in the main navigation
  menu: {
    logo: MenuLogo,
  },
  locales: ['fa'],
  translations: {
    fa: {
      "Auth.form.welcome.title": "سلام"
    }
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
