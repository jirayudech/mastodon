const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'app/javascript/mastodon/locales/',
  detectDuplicateIds: false,
  singleMessagesFile: true,
  languages: [
    'ar',
    'en',
    'de',
    'es',
    'fa',
    'hr',
    'hu',
    'io',
    'it',
    'fr',
    'nl',
    'no',
    'oc',
    'pt',
    'pt-BR',
    'uk',
    'fi',
    'eo',
    'ru',
    'ja',
    'zh-HK',
    'zh-CN',
    'bg',
    'id',
  ],
})
