import { types} from 'mobx-state-tree'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: '',
    description: '',
    seen: false,
    notes: '',
    available: true,
})
    .views((self) => ({
        get isSeen() {
            return self.seen
        },

        findInTitle(param: any) {
            self.title.includes(param)
        }
    }))
    .actions((self) => ({
        changeNotes(value: string) {
            self.notes = value
        },

        changeSeen(state: boolean) {
            console.log('>>state', state)
            self.seen = state
        },

        changeAvailable(state: boolean){
            console.log('state of available', state)
            self.available = state
        }
    }))