type RuMessages = typeof import("./messages/ru.json");
type KzMessages = typeof import("./messages/kz.json");
type EnMessages = typeof import("./messages/en.json");

declare interface IntlMessages extends RuMessages, KzMessages, EnMessages { }

declare type TranslationFunction = TFunction<IntlMessages>;
