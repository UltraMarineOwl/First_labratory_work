import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/ContentModel'

const LocalStorage = types.model('LocalStorage', {
    content: types.array(ContentModel)
})

export default LocalStorage