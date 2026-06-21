
import { create } from 'zustand'
import type { ICountry, IState, ICity } from 'country-state-city'

interface ModalStore {
    Countries: ICountry[]

    loadCountries: () => Promise<ICountry[]>
    getCountryData: (index: number) => ICountry
    getStateData: (countryIndex: number, stateIndex: number) => IState
    getStates: (countryIndex: number) => IState[]
    getCities: (countryIndex: number, stateIndex: number) => ICity[]
}

type CscModule = typeof import('country-state-city')

let cscModule: CscModule | null = null
let cscPromise: Promise<CscModule> | null = null

function loadCsc(): Promise<CscModule> {
    if (cscModule) return Promise.resolve(cscModule)
    if (!cscPromise) {
        cscPromise = import('country-state-city').then((mod) => {
            cscModule = mod
            return mod
        })
    }
    return cscPromise
}

const useCountry = create<ModalStore>((set, get) => ({
    Countries: [],

    loadCountries: async () => {
        const mod = await loadCsc()
        const countries = mod.Country.getAllCountries()
        set({ Countries: countries })
        return countries
    },

    getCountryData: (index): ICountry => {
        const countries = cscModule ? cscModule.Country.getAllCountries() : get().Countries
        return countries[index]!
    },

    getStateData: (countryIndex, stateIndex): IState => {
        if (!cscModule) return {} as IState
        const countries = cscModule.Country.getAllCountries()
        const states = cscModule.State.getStatesOfCountry(countries[countryIndex]!.isoCode)
        return states[stateIndex]!
    },

    getStates: (countryIndex) => {
        try {
            if (!cscModule) return []
            const countries = cscModule.Country.getAllCountries()
            return cscModule.State.getStatesOfCountry(countries[countryIndex]!.isoCode)
        } catch {
            return []
        }
    },

    getCities: (countryIndex, stateIndex) => {
        try {
            if (!cscModule) return []
            const countries = cscModule.Country.getAllCountries()
            const states = cscModule.State.getStatesOfCountry(countries[countryIndex]!.isoCode)
            return cscModule.City.getCitiesOfState(countries[countryIndex]!.isoCode, states[stateIndex]!.isoCode)
        } catch {
            return []
        }
    },
}))


export default useCountry;
