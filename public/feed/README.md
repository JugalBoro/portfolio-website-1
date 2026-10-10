<!-- Document the shared script dependency and the limits of this existing-app embed. -->
# Kloth feed preview

The static `/feed/` page is copied into the Vite build from `public/feed`. It loads the shared script from `https://thirsty-morse-f8b8e2.netlify.app/kloth/loader.v1.js` and embeds the real `https://kloth.me/make-my-twin` experience.

The original portfolio homepage is unchanged. New visitors still complete Kloth onboarding. Cart actions remain inside Kloth; this is not yet a merchant cart, brand-isolated catalog, or cross-site identity integration.

Deploy the companion `JugalBoro/portfolio-website` repository first so the shared script is available.
