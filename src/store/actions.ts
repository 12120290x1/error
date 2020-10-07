import { State } from './state'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'

export enum ActionTypes {
  'TOGGLE_isNavOpen' = 'TOGGLE_isNavOpen'
}

type AugmentedActionContext = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.TOGGLE_isNavOpen](context: AugmentedActionContext): void
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.TOGGLE_isNavOpen]({ commit }) {
    commit(MutationType.TOGGLE_isNavOpen)
  }
}
