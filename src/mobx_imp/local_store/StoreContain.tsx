import LocalStorage from "./LocalStorage";

const storageContain = LocalStorage.create({
    content: [
        {
            id: '1',
            title: 'Night Movies',
            description: 'Watch with your friends and family',
            seen: false,
            notes: '',
            available: false,
        },{
            id: '2',
            title: 'Horika',
            description: 'Everywhere you can eat',
            seen: false,
            notes: '',
            available: false,
        },{
            id: '3',
            title: 'Neko cafe',
            description: 'Time to play with cats and drink overpriced coffee',
            seen: false,
            notes: '',
            available: false,
        },{
            id: '4',
            title: 'Vogue',
            description: 'Read about celebrities life',
            seen: false,
            notes: '',
            available: false,
        }
    ]
})

export default storageContain