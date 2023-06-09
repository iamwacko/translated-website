// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'eo'
	| 'it'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * E​d​u​c​a​t​i​n​g​ ​L​o​c​a​l​l​y
	 */
	title: string
	/**
	 * E​d​u​c​a​t​i​n​g​ ​L​o​c​a​l​l​y
	 */
	welcome: string
	/**
	 * {​0​}​ ​l​i​v​e​ ​s​p​e​c​t​a​t​o​r​{​{​s​}​}
	 * @param {string | number | boolean} 0
	 */
	spectators: RequiredParams<'0'>
	summit: {
		/**
		 * {​0​|​s​i​m​p​l​e​D​a​t​e​}
		 * @param {Date} 0
		 */
		schedule: RequiredParams<'0|simpleDate'>
	}
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
	paragraph: string
}

export type TranslationFunctions = {
	/**
	 * Educating Locally
	 */
	title: () => LocalizedString
	/**
	 * Educating Locally
	 */
	welcome: () => LocalizedString
	/**
	 * {0} live spectator{{s}}
	 */
	spectators: (arg0: string | number | boolean) => LocalizedString
	summit: {
		/**
		 * {0|simpleDate}
		 */
		schedule: (arg0: Date) => LocalizedString
	}
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
	paragraph: () => LocalizedString
}

export type Formatters = {
	simpleDate: (value: Date) => unknown
}
