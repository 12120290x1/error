import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {
  'TOGGLE_isNavOpen' = 'TOGGLE_isNavOpen'
}

export type Mutations = {
  [MutationType.TOGGLE_isNavOpen](state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.TOGGLE_isNavOpen](state) {
    state.isNavOpen = !state.isNavOpen
  }
}
