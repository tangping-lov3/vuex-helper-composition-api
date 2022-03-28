import * as vuex from 'vuex';
import { ComputedRef } from 'vue';

interface ComputedReturnd {
    [key: string]: ComputedRef<Function>;
}
declare const useMapState: (namespace: string, map: Record<string, (this: vuex.CustomVue, state: unknown, getters: any) => any>) => ComputedReturnd;
declare const useMapGetters: (namespace: string, map: Record<string, string>) => ComputedReturnd;
declare const useMapActions: (namespace: string, map: Record<string, (this: vuex.CustomVue, dispatch: vuex.Dispatch, ...args: any[]) => any>) => {
    [x: string]: (...args: any[]) => any;
};
declare const useMapMutations: (namespace: string, map: Record<string, (this: vuex.CustomVue, commit: vuex.Commit, ...args: any[]) => any>) => {
    [x: string]: (...args: any[]) => any;
};

export { useMapActions, useMapGetters, useMapMutations, useMapState };
