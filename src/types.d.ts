import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export const useMapState: (...args: Parameters<typeof mapState>) => Record<string, ComputedRef>
export const useMapActions: typeof mapActions
export const useMapGetters:  (...args: Parameters<typeof mapGetters>) => Record<string, ComputedRef>
export const useMapMutations: typeof mapMutations
