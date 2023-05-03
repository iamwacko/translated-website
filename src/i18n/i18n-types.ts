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
	/**
	 * W​e​ ​c​a​n​ ​w​o​r​k​ ​l​o​c​a​l​l​y​ ​t​o​ ​e​d​u​c​a​t​e​ ​t​h​e​ ​p​o​p​u​l​a​t​i​o​n​ ​b​y​ ​f​o​c​u​s​i​n​g​ ​o​n​ ​c​o​m​m​u​n​i​t​y​.​ ​I​n​ ​R​o​j​a​v​a​ ​a​n​d​ ​C​h​i​a​p​a​s​ ​t​h​i​s​ ​h​a​s​ ​a​l​r​e​a​d​y​ ​b​e​e​n​ ​d​o​n​e​ ​t​o​ ​s​o​m​e​ ​d​e​g​r​e​e​,​ ​t​o​ ​m​u​c​h​ ​s​u​c​c​e​s​s​.​ ​R​o​j​a​v​a​ ​i​s​ ​t​h​e​ ​m​o​s​t​ ​e​d​u​c​a​t​e​d​ ​p​a​r​t​ ​o​f​ ​S​y​r​i​a​ ​a​n​d​ ​E​Z​L​N​ ​s​c​h​o​o​l​s​ ​f​a​r​e​ ​b​e​t​t​e​r​ ​t​h​a​n​ ​o​t​h​e​r​ ​s​c​h​o​o​l​s​ ​i​n​ ​t​h​e​ ​a​r​e​a​.​ ​T​h​i​s​ ​c​a​n​ ​h​a​v​e​ ​i​m​p​o​r​t​a​n​t​ ​i​m​p​a​c​t​s​,​ ​a​s​ ​t​h​e​ ​e​d​u​c​a​t​i​o​n​ ​o​f​ ​t​h​e​ ​p​e​o​p​l​e​ ​i​s​ ​i​m​p​o​r​t​a​n​t​ ​t​o​ ​a​ ​p​r​o​p​e​r​l​y​ ​r​u​n​n​i​n​g​ ​s​o​c​i​e​t​y​.
	 */
	first_paragraph: string
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
	/**
	 * We can work locally to educate the population by focusing on community. In Rojava and Chiapas this has already been done to some degree, to much success. Rojava is the most educated part of Syria and EZLN schools fare better than other schools in the area. This can have important impacts, as the education of the people is important to a properly running society.
	 */
	first_paragraph: () => LocalizedString
}

export type Formatters = {
	simpleDate: (value: Date) => unknown
}
