'use strict';
import CardServ from './CardServ'

// const deals = [
//     {
//         name: 'Amazing Foot Massage',
//         _id: 'abcde',
//         expTime: 1515423175632,
//         cardId: '',
//         price: 70,
//         rank: 4,
//         desc: '',
//     },
//     {
//         name: 'Magical Weekend',
//         _id: 'bcdef',
//         expTime: 1515682428288,
//         cardId: '',
//         price: 300,
//         rank: 5,
//         desc: '',
//     },
//     {
//         name: 'Classic Dinner',
//         _id: 'cdefg',
//         expTime: 1515982428288,
//         cardId: '',
//         price: 60,
//         rank: 4,
//         desc: '',
//     },
//     {
//         name: 'Movie Tickets',
//         _id: 'defgh',
//         expTime: 1515223175632,
//         cardId: '',
//         price: 70,
//         rank: 4,
//         desc: '',
//     }
// ]

const deals = _generateItems()

function getDeals() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(deals)
        }, 300)
    })
}

// function getDealById(dealId) {
//     // console.log('dealId in service.getDealById: ', dealId)
//     // var deal = {txt: 'test object in service'};

//     var deal = deals.find(deal => deal._id === dealId)
//     // console.log('deal in service: ', deal)
//     return deal
// }

function getDealById(dealId) {
    return new Promise((resolve, reject) => {
        var foundDeal = deals.find(deal => deal._id === dealId)
        if (foundDeal) resolve(foundDeal)
        else reject();
    })


}

function _generateItems() {
    const skills = [
        'Weekend in Rome',
        'Foot Massage',
        'Classic Dinner at Fergburger ',
        'Star Wars tickets',
        'Coding Academy Bootcamp',
        'Barcelona vs Valencia',
        'Drinks at Jackson\'s',
        'IPad Pro',
        'a Day at the Spa',
        'Iron Maiden tickets',
        'Subscription to the Gym',
        '5 Free passes to the Pool',
        '100$ at Guitar Center',
        'Free Meal at ByteMe',
        'Escape Room',
        // 'react',
        // 'git',
        // 'jquery',
        // 'webpack',
        // 'ember',
        // 'design',
        // 'database'
    ];

    return skills.map((dealName, i) => {
        var cardIdx = i % CardServ.cards.length
        return {
            _id: `${dealName}${i}`,
            name: `${dealName}`,
            imgUrl: `static/deals/${i+1}.jpg`,
            price: (i + 1) * 10,
            cardId: CardServ.cards[cardIdx].id,
            currency: '$',
            desc: ` 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Velit nemo voluptatem, architecto, quibusdam tenetur eius odit 
                    ipsa libero iure expedita alias tempora. 
                    Corrupti ratione, sunt quia quidem velit perferendis perspiciatis.  
                    `,
        };
    })
}

export default {
    getDeals,
    getDealById,
}