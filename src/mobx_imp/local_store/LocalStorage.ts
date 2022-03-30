import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/ContentModel'


const LocalStorage = types.model('LocalStorage', {
    content: types.array(ContentModel),
    // form_response: types.array(ContentModel)
}).actions((self) =>({
    addContent(content:any){
        self.content.push(content)
    }
}))


export default LocalStorage